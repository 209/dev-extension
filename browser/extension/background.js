import browser from 'webextension-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { wrapStore } from 'webext-redux';
import Root from '../../app/pages/background/Root';
import getStore from '../../app/stores/configuration/configureStore';

require('./background/contextMenus');

browser.browserAction.setBadgeText({ text: '' });

const init = (obj = { state: undefined }) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');
  const store = getStore()(initialState);

  wrapStore(store, { portName: '_DEV_EXTENSION_BROWSER_STORE' });

  ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root'),
  );
};

// browser.storage.local.get('state', init);
setTimeout(() => init(), 200);
