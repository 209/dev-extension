import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as activeTabActions from '../../stores/activeTab/actions';
import { getEditorInfo, getSession } from '../../stores/activeTab/selectors';
import style from './App.css';

@connect(
  (state) => ({
    editorInfo:     getEditorInfo(state),
    session:    getSession(state),
  }),
  (dispatch) => ({
    activeTabActions: bindActionCreators(activeTabActions, dispatch),
  }),
)
class App extends Component {
  static propTypes = {
    activeTabActions: PropTypes.object,
    editorInfo:       PropTypes.string,
    session:          PropTypes.object,
  };

  constructor(props) {
    super(props);

    props.activeTabActions.getData();
  }

  render() {
    const { editorInfo, session } = this.props;

    if (!editorInfo) {
      return (
        <div className={style.main}>
          {editorInfo || 'no editor'}
        </div>
      );
    }

    const {
      project: {
        projectId,
        viewerId,
      },
    } = session;

    return (
      <div className={style.main}>
        <div>
          <span>devBuildLabel:</span>
          <span>{editorInfo}</span>
        </div>
        <div>
          <span>projectId:</span>
          <span>{projectId}</span>
        </div>
        <div>
          <span>viewerId:</span>
          <span>{viewerId}</span>
        </div>
      </div>
    );
  }
}

export default App;
