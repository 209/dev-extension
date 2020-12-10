import { all, takeLatest } from 'redux-saga/effects';
import { init as browsersInitSaga } from '../browser/saga';
import * as actionTypes from './actionTypes';

function* init() {
  yield browsersInitSaga();
}

export default function* commonSaga() {
  yield all([
    takeLatest(actionTypes.INIT, init),
  ]);
}
