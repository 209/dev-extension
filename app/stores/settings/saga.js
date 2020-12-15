import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

function* init() {
  // тут что-то может быть
}

export default function* commonSaga() {
  yield all([
    takeLatest(actionTypes.INIT, init),
  ]);
}
