import * as actionTypes from './actionTypes';

const initialState = {
  editorInfo: '',
};

const actionsMap = {
  [actionTypes.UPDATE](state, { editorInfo, sessionStore, source }) {
    return {
      ...state,
      editorInfo,
      sessionStore,
      source,
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
