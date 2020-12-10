import { all, call, put, takeLatest } from 'redux-saga/effects';
import getDataFromActiveTab from '../browser/utils/getDataFromActiveTab';
import * as actionTypes from './actionTypes';
import { update, clear } from './actions';

function* getDataFromActiveTabSaga() {
  const { editorInfo } = yield call(getDataFromActiveTab);

  if (editorInfo) {
    yield put(update({
      editorInfo,
    }));
  } else {
    yield put(clear());
  }
}

export default function* activeTabSaga() {
  yield all([
    takeLatest(actionTypes.GET_DATA, getDataFromActiveTabSaga),
  ]);
}
