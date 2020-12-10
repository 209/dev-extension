import browser from 'webextension-polyfill';

browser.storage.local.get('todos', (obj) => {
  let { todos } = obj;
  if (todos) {
    todos = JSON.parse(todos);
    const len = todos.filter((todo) => !todo.marked).length;
    if (len > 0) {
      browser.browserAction.setBadgeText({ text: len.toString() });
    }
  } else {
    // Initial
    browser.browserAction.setBadgeText({ text: '1' });
  }
});
