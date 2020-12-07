import { takeEvery, all, call, put, take, select } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

export function* changeBadge(data) {
  // const isAvailableUpdate = yield select(chromeSelectors.getIsAvailableUpdate);
  // if (isAvailableUpdate) {
  //   browser.browserAction.setBadgeText({ text: 'upd' });
  //   browser.browserAction.setBadgeBackgroundColor({ color: '#ff8000' });
  //   return;
  // }
  // if (!data) {
  //   browser.browserAction.setBadgeText({ text: '' });
  //   browser.browserAction.setBadgeBackgroundColor({ color: '#7fff00' });
  //   return;
  // }
  //
  // const { storeId, isProcessed } = data;
  // const text = storeId ? ' ' : '';
  // const color = isProcessed ? '#ff8000' : '#7fff00';
  //
  // browser.browserAction.setBadgeText({ text });
  // browser.browserAction.setBadgeBackgroundColor({ color });
}

export default function* chromeSaga() {
  yield all([]);
}
