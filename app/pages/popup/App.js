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
  // eslint-disable-next-line react/static-property-placement
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
    console.log(this.props);
    const { editorInfo, session } = this.props;

    if (!editorInfo) {
      return (
        <div className={style.main}>
          {editorInfo || 'no editor'}
        </div>
      );
    }

    const { project } = session;

    return (
      <div className={style.main}>
        <div>
          <span>devBuildLabel:</span>
          <span>{editorInfo}</span>
        </div>
        {project && project.projectId && (
          <div>
            <span>projectId:</span>
            <span>{project.projectId}</span>
          </div>
        )}
        {project && project.viewerId && (
          <div>
            <span>viewerId:</span>
            <span>{project.viewerId}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
