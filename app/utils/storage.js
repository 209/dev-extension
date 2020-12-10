import browser from 'webextension-polyfill';

function saveState(state) {
  browser.storage.local.set({ state: JSON.stringify(state) });
}

export default function () {
  return (next) => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
    });
    return store;
  };
}

export function setToSyncStorage(data) {
  return new Promise((resolve) => {
    browser.storage.sync.set(data, resolve);
  });
}

export function getFromSyncStorage(keys) {
  return new Promise((resolve) => {
    browser.storage.sync.get(keys, resolve);
  });
}
