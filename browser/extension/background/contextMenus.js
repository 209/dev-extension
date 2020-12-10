import browser from 'webextension-polyfill';

let windowId = 0;
const CONTEXT_MENU_ID = 'example_context_menu';

function closeIfExist() {
  if (windowId > 0) {
    browser.windows.remove(windowId);
    windowId = browser.windows.WINDOW_ID_NONE;
  }
}

function popWindow(type) {
  // closeIfExist();
  // const options = {
  //   type:   'popup',
  //   left:   100,
  //   top:    100,
  //   width:  800,
  //   height: 475,
  // };
  if (type === 'open') {
    // options.url = 'window.html';
    browser.tabs.create({ url: '/popup.html' });

    // browser.windows.create(options, (win) => {
    //   windowId = win.id;
    // });
  }
}

browser.contextMenus.create({
  id:                  CONTEXT_MENU_ID,
  title:               'Lister',
  contexts:            ['all'],
  documentUrlPatterns: [],
});

browser.contextMenus.onClicked.addListener((event) => {
  if (event.menuItemId === CONTEXT_MENU_ID) {
    popWindow('open');
  }
});
