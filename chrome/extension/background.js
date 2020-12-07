import React from 'react';
import ReactDOM from 'react-dom';
import { wrapStore } from 'webext-redux';
import Root from '../../app/pages/background/Root';
import getStore from '../../app/stores/configuration/configureStore';
import './ga';

const bluebird = require('bluebird');

global.Promise = bluebird;

function promisifier(method) {
  // return a function
  return function promisified(...args) {
    // which returns a promise
    return new Promise((resolve) => {
      args.push(resolve);
      method.apply(this, args);
    });
  };
}

function promisifyAll(obj, list) {
  list.forEach((api) => bluebird.promisifyAll(obj[api], { promisifier }));
}

// let browser extension api support Promise
promisifyAll(chrome, [
  'tabs',
  'windows',
  'browserAction',
  'contextMenus',
]);
promisifyAll(chrome.storage, [
  'local',
]);

require('./background/contextMenus');

chrome.browserAction.setBadgeText({ text: '' });

const init = (obj = { state: undefined }) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');
  const store = getStore()(initialState);

  wrapStore(store, { portName: 'CHROME_LISTER' });

  ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root'),
  );
};

// browser.storage.local.get('state', init);
setTimeout(() => init(), 200);
