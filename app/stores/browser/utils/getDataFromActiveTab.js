import browser from 'webextension-polyfill';
import { GET_DATA_FROM_ACTIVE_TAB } from '../../../../utils/constants';

export default function getDataFromActiveTab() {
  return browser.tabs.query({ active: true, currentWindow: true })
    .then((tabs) => {
      if (!tabs || !tabs[0] || !tabs[0].id) {
        return;
      }
      browser.tabs.sendMessage(tabs[0].id, { method: GET_DATA_FROM_ACTIVE_TAB });
    });
}
