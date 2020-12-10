const getRoot = (state) => state.activeTab;

const getEditorInfo = (state) => getRoot(state).editorInfo;
const getSession = (state) => {
  try {
    const data = JSON.parse(getRoot(state).sessionStore);
    const { sessions } = data;
    const firstSessionId = Object.keys(sessions)[0];
    return sessions[firstSessionId];
  } catch (e) {
    return {
      testData: getRoot(state).sessionStore,
    };
  }
};

export {
  getEditorInfo,
  getSession,
};
