import { all, call, put, takeLatest } from 'redux-saga/effects';
import getDataFromActiveTab from '../browser/utils/getDataFromActiveTab';
import * as actionTypes from './actionTypes';
import { update, clear } from './actions';

function* getDataFromActiveTabSaga() {
  yield call(getDataFromActiveTab);
}

export function* setDataFromActiveTabSaga(data, source) {
  const {
    editorInfo,
    sessionStore,
  } = data;

  if (editorInfo) {
    const action = update({
      editorInfo,
      sessionStore,
      source,
    });
    yield put(action);
  } else {
    yield put(clear());
  }
}

export default function* activeTabSaga() {
  yield all([
    takeLatest(actionTypes.GET_DATA, getDataFromActiveTabSaga),
  ]);
}
