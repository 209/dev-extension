import browser from 'webextension-polyfill';
import deepInject from './deepInject';

export default () => {
  const { id } = browser.runtime;

  deepInject("(function () {window.devExtensionId = '".concat(id, "'; })();"));

  return new Promise((resolve) => {
    if (window.document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', () => {
        resolve();
      });
    }
  });
};
