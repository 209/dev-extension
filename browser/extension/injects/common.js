import browser from 'webextension-polyfill';
import init from './utils/init';
import getEditorInfo from './utils/getEditor';
import {
  TAB_IS_EDITOR,
  GET_DATA_FROM_ACTIVE_TAB,
} from '../../../utils/constants';

init()
  .then(() => {
    const { id } = browser.runtime;

    browser.runtime.sendMessage(id, {
      method: TAB_IS_EDITOR,
    }).then(() => {
      // eslint-disable-next-line no-console
      console.log('sendMessage success');
    });

    browser.runtime.onMessage.addListener(
      (request, sender, sendResponse) => {
        if (request.method === GET_DATA_FROM_ACTIVE_TAB) {
          sendResponse({
            editorInfo: getEditorInfo(),
          });
        }
      },
    );
  });
