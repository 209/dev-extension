import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../../reducers';
import rootSaga from '../../sagas';
import storage from '../../utils/storage';

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);
const enhancer = compose(
  middlewares,
  storage(),
);

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
