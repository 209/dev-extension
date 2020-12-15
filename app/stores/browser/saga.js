import browser from 'webextension-polyfill';
import { all, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { setDataFromActiveTabSaga } from '../activeTab/saga';
import { DEEP_INJECT_GET_DATA } from '../../../utils/constants';

function* BrowserEventsListener() {
  return eventChannel((emit) => {
    const sendEmit = (data, source) => emit({ data, source });
    const listener = (data, source) => {
      if (!data && !data.method) {
        return;
      }
      sendEmit({ data: data.data, method: data.method, source });
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
    const { data: rawData } = yield take(chromeEventsChannel);
    // сюда проваливаются иногда события из вкладок без pdfFiller
    if (!rawData || !rawData.data) {
      // eslint-disable-next-line no-continue
      continue;
    }
    const { data, source } = rawData;
    switch (rawData.method) {
      case DEEP_INJECT_GET_DATA:
        yield setDataFromActiveTabSaga(data, source);
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
