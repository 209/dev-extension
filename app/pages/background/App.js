import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as backgroundActions from '../../stores/browser/actions';

@connect(
  (state) => ({ state }),
  (dispatch) => ({
    backgroundActions:   bindActionCreators(backgroundActions, dispatch),
  }),
)
class App extends Component {
  static propTypes = {
    backgroundActions:   PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div />
    );
  }
}

export default App;
