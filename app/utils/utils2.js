function forceAvailableExtensionVersion() {
  browser.runtime.requestUpdateCheck((status) => {
    if (status === 'update_available') {
      if (confirm("Exchange was updated and will restart")) {
        if (status === 'update_available') {
          browser.runtime.reload();
        }
      }
    }
  });
}

