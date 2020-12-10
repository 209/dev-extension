import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'webext-redux';
import Root from '../../app/pages/popup/Root';
import './popup.css';

const store = new Store({
  portName: '_DEV_EXTENSION_BROWSER_STORE',
});

store.ready().then(() => {
  ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root'),
  );
});
