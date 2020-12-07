import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './App.css';

@connect(
  (state) => ({

  }),
  (dispatch) => ({

  }),
)
class App extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.main}>
        popup content
      </div>
    );
  }
}

export default App;
