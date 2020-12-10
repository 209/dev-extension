import { all } from 'redux-saga/effects';
import chrome from '../stores/browser/saga';
import common from '../stores/common/saga';

export default function* rootSaga() {
  yield all([
    ...chrome(),
    ...common(),
  ]);
}
