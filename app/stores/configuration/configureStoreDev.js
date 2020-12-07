import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../../reducers';
import rootSaga from '../../sagas';
import storage from '../../utils/storage';

// В докере почему-то неработает. На хосте не пробовал.
const composeEnhancers = composeWithDevTools({
  name:                  'chrome lister',
  realtime:              true,
  // hostname:              'localhost',
  // port:                  8000,
});
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  storage(),
);

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../../reducers', () => {
      const nextRootReducer = require('../../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
