function forceAvailableExtensionVersion() {
  chrome.runtime.requestUpdateCheck((status) => {
    if (status === 'update_available') {
      if (confirm("Exchange was updated and will restart")) {
        if (status === 'update_available') {
          chrome.runtime.reload();
        }
      }
    }
  });
}

