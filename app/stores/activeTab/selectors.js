const getRoot = (state) => state.activeTab;

const getEditorInfo = (state) => getRoot(state).editorInfo;
const getSource = (state) => getRoot(state).source;
const getSession = (state) => {
  const data = JSON.parse(getRoot(state).sessionStore);
  const { sessions } = data;
  const firstSessionId = Object.keys(sessions)[0];
  return sessions[firstSessionId];
};
const getProject = (state) => {
  try {
    const session = getSession(state);
    const { project } = session;

    if (project.projectId && project.viewerId) {
      return project;
    }
    return null;
  } catch (e) {
    return {
      testData: getRoot(state).sessionStore,
    };
  }
};
const getToken = (state) => {
  try {
    const session = getSession(state);
    const { websocketClient } = session;

    if (websocketClient.apiHash) {
      return websocketClient.apiHash;
    }
    return null;
  } catch (e) {
    return null;
  }
};

export {
  getEditorInfo,
  getProject,
  getToken,
};
