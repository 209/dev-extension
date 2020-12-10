import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commonActions from '../../stores/common/actions';

@connect(
  (state) => ({ state }),
  (dispatch) => ({
    actions: bindActionCreators(commonActions, dispatch),
  }),
)
class App extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    actions:   PropTypes.object,
  };

  constructor(props) {
    super(props);

    props.actions.init();
  }

  render() {
    return (
      <div />
    );
  }
}

export default App;
