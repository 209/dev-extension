import browser from 'webextension-polyfill';
import init from './utils/init';
import getEditorInfo from './utils/getEditor';
import {
  GET_DATA_FROM_ACTIVE_TAB,
  DEEP_INJECT_GET_DATA,
} from '../../../utils/constants';
import deepInject from './utils/deepInject';
import getFromJS from './utils/getFromJS';

const listenExtension = () => {
  browser.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      if (request.method === GET_DATA_FROM_ACTIVE_TAB) {
        const code = `(${getFromJS})('${DEEP_INJECT_GET_DATA}');`;
        deepInject(code);
      }
    },
  );
};

const listenTab = () => {
  window.addEventListener('message', (event) => {
    if (event.source === window && event.data && event.data.method === DEEP_INJECT_GET_DATA) {
      browser.runtime.sendMessage(browser.runtime.id, {
        method: event.data.method,
        data:   {
          sessionStore: event.data.sessionStore,
          editorInfo:   getEditorInfo(),
        },
      });
    }
  });
};

init()
  .then(() => {
    // browser.runtime.sendMessage(browser.runtime.id, {
    //   method: TAB_IS_EDITOR,
    // }).then(() => {
    //   // eslint-disable-next-line no-console
    //   console.log('sendMessage success');
    // });

    listenExtension();
    listenTab();
  });
