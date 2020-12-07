import * as actionTypes from './actionTypes';

const initialState = {
  isProcessing: false,
};

const actionsMap = {
  [actionTypes.INIT](state, action) {
    return {
      ...state,
    };
  },
  [actionTypes.TOGGLE_PROCESSING](state, { isProcessing }) {
    return {
      ...state,
      isProcessing,
    };
  },
};

export default function commonReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
