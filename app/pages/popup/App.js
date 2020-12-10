import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as activeTabActions from '../../stores/activeTab/actions';
import { getEditorInfo } from '../../stores/activeTab/selectors';
import style from './App.css';

@connect(
  (state) => ({
    editorInfo: getEditorInfo(state),
  }),
  (dispatch) => ({
    activeTabActions: bindActionCreators(activeTabActions, dispatch),
  }),
)
class App extends Component {
  static propTypes = {
    activeTabActions: PropTypes.object,
    editorInfo:         PropTypes.string,
  };

  constructor(props) {
    super(props);

    props.activeTabActions.getData();
  }

  render() {
    const { editorInfo } = this.props;

    return (
      <div className={style.main}>
        {editorInfo || 'no editor'}
      </div>
    );
  }
}

export default App;
