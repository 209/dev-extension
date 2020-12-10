import * as actionTypes from './actionTypes';

const initialState = {
  editorInfo: false,
};

const actionsMap = {
  [actionTypes.UPDATE](state, { editorInfo, sessionStore }) {
    return {
      ...state,
      editorInfo,
      sessionStore,
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
