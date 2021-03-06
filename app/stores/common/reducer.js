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
};

export default function commonReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
