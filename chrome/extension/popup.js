import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'webext-redux';
import Root from '../../app/pages/popup/Root';
import './popup.css';
import './ga';

const store = new Store({
  portName: 'CHROME_LISTER',
});

store.ready().then(() => {
  ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root'),
  );
});
