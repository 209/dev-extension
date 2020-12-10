import browser from 'webextension-polyfill';
import { all, call, take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { TAB_IS_EDITOR } from '../../../utils/constants';
import { update } from '../activeTab/actions';
import getDataFromActiveTab from './utils/getDataFromActiveTab';

function* BrowserEventsListener() {
  return eventChannel((emit) => {
    const sendEmit = (data, source) => emit({ data, source });
    const listener = (data, source, ...otherData) => {
      if (!data && !data.method) {
        return;
      }
      sendEmit(data, source);
    };

    browser.runtime.onMessage.addListener(listener);

    return () => {
      browser.runtime.onMessage.removeListener(listener);
    };
  });
}

export function* init() {
  const chromeEventsChannel = yield call(BrowserEventsListener);

  while (true) {
    const { data, source } = yield take(chromeEventsChannel);
    switch (data.method) {
      case TAB_IS_EDITOR:
        break;
      default:
        break;
    }
  }
}

export default function* browserSaga() {
  yield all([

  ]);
}
