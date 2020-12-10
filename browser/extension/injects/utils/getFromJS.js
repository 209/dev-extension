function getDataForDevExtension() {
  postMessage({
    method:       'dev-extension:deep-inject',
    sessionStore: window.JSON.stringify(window.JSFillerStores.sessionStore),
  });
}

export default getDataForDevExtension;
