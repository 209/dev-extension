import { all } from 'redux-saga/effects';
import browser from '../stores/browser/saga';
import common from '../stores/common/saga';
import activeTab from '../stores/activeTab/saga';

export default function* rootSaga() {
  yield all([
    ...browser(),
    ...common(),
    ...activeTab(),
  ]);
}
