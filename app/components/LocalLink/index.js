import React from 'react';
import { connect } from 'react-redux';
import { getProject, getToken } from '../../stores/activeTab/selectors';
import { getDesk, getLocalHost } from '../../stores/settings/selectors';
import { updateLocalHost, updateDesk } from '../../stores/settings/actions';
// // import PropTypes from 'prop-types';
// import style from './style.css';

const LocalLink = (props) => {
  const {
    project,
    desk,
    localHost,
    token,
  } = props;
  if (!project) {
    return null;
  }
  const {
    projectId,
    viewerId,
  } = project;

  const handleChangeLocalHost = (e) => props.updateLocalHost(e.target.value);
  const handleChangeDesk = (e) => props.updateDesk(e.target.value);

  const params = [
    `viewerId=${viewerId}`,
    `projectId=${projectId}`,
    '_host=https://dev3.pdffiller.com/',
    `token=${token}`,
  ];
  if (desk) {
    params.push(`ws.config.host=wss://${desk}-websocket.pdffillers.com/`);
  }

  const localUrl = `http://${localHost}/?${params.join('&')}`;

  return (
    <div>
      <div>
        <label htmlFor="localHost">Local Host: </label>
        <input
          id="localHost"
          type="text"
          value={localHost}
          onChange={handleChangeLocalHost}
        />
      </div>
      <div>
        <label htmlFor="desk">desk: </label>
        <input
          id="desk"
          type="text"
          value={desk}
          onChange={handleChangeDesk}
        />
      </div>
      <div>
        <span>local url: </span>
        <a target="_blank" rel="noreferrer" href={localUrl}>{localUrl}</a>
      </div>
    </div>
  );
};

export default connect((state) => ({
  localHost: getLocalHost(state),
  project: getProject(state),
  desk: getDesk(state),
  token: getToken(state),
}), {
  updateLocalHost,
  updateDesk,
})(LocalLink);

