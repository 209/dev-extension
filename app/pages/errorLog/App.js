import React, { Component } from 'react';
import { BackTop } from 'antd';
import style from './App.css';

export default class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <BackTop style={{ right: '50px' }} />
      </div>
    );
  }
}
