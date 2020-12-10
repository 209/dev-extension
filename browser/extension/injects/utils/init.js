import browser from 'webextension-polyfill';

export default () => {
  const script = document.createElement('script');
  const { id } = browser.runtime;

  script.textContent = "(function () {window.devExtensionId = '".concat(id, "'; })();");
  (document.head || document.documentElement).appendChild(script);
  script.remove();

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
