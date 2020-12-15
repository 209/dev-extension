import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as activeTabActions from '../../stores/activeTab/actions';
import { getEditorInfo, getProject, getToken } from '../../stores/activeTab/selectors';
import LocalLink from '../../components/LocalLink';
import style from './App.css';

@connect(
  (state) => ({
    editorInfo: getEditorInfo(state),
    project: getProject(state),
    token: getToken(state),
  }),
  (dispatch) => ({
    activeTabActions: bindActionCreators(activeTabActions, dispatch),
  }),
)
class App extends Component {
  constructor(props) {
    super(props);

    props.activeTabActions.getData();
  }

  render() {
    const { editorInfo, project, token } = this.props;

    if (!editorInfo) {
      return (
        <div className={style.main}>
          {editorInfo || 'no editor'}
        </div>
      );
    }

    return (
      <div className={style.main}>
        <div>
          <span>devBuildLabel:</span>
          <span>{editorInfo}</span>
        </div>
        {project && (
          <>
            <div>
              <span>projectId:</span>
              <span>{project.projectId}</span>
            </div>
            <div>
              <span>viewerId:</span>
              <span>{project.viewerId}</span>
            </div>
          </>
        )}
        {token && (
          <div>
            <span>token:</span>
            <span>{token}</span>
          </div>
        )}
        <LocalLink />
      </div>
    );
  }
}

export default App;
