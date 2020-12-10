import * as actionTypes from './actionTypes';

const initialState = {
  editorInfo: false,
};

const actionsMap = {
  [actionTypes.UPDATE](state, { editor }) {
    return {
      ...state,
      editorInfo: editor.editorInfo,
    };
  },
  [actionTypes.CLEAR]() {
    return {
      ...initialState,
    };
  },
};

export default function activeTabReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
