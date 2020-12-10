const script = document.createElement('script');
const id = chrome.runtime.id;

script.textContent = "(function () {window.fileExchangeExtensionId = '".concat(id, "'; })();");

(document.head || document.documentElement).appendChild(script);
script.remove();
