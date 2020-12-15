function getDataForDevExtension(method) {
  postMessage({
    method,
    sessionStore: window.JSON.stringify(window.JSFillerStores.sessionStore),
  });
}

export default getDataForDevExtension;
