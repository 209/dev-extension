const getRoot = (state) => state.activeTab;

const getEditorInfo = (state) => getRoot(state).editorInfo;

export {
  getEditorInfo,
};
