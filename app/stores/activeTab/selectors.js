const getRoot = (state) => state.activeTab;

const getEditorInfo = (state) => getRoot(state).editorInfo;
const getSource = (state) => getRoot(state).source;
const getSession = (state) => {
  try {
    const data = JSON.parse(getRoot(state).sessionStore);
    console.log(data);
    const { sessions } = data;
    console.log(sessions);
    const firstSessionId = Object.keys(sessions)[0];
    console.log(firstSessionId);
    console.log(sessions[firstSessionId]);
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
