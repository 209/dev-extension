export function executeScript(tabId, params) {
  return new Promise((resolve) => {
    chrome.tabs.executeScript(tabId, params, (result) => {
      resolve(result);
    });
  });
}

export function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export function openTab(url) {
  return new Promise((resolve) => {
    chrome.tabs.create({
      url:    url,
      active: true,
    }, ({ id }) => resolve(id));
  });
}
