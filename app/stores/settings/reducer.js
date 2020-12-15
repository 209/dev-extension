import * as actionTypes from './actionTypes';

const initialState = {
  localHost: 'localhost:3000',
  desk: '',
};

const actionsMap = {
  [actionTypes.INIT](state) {
    return {
      ...state,
    };
  },
  [actionTypes.UPDATE_LOCAL_HOST](state, { localHost }) {
    return {
      ...state,
      localHost,
    };
  },
  [actionTypes.UPDATE_DESK](state, { desk }) {
    return {
      ...state,
      desk,
    };
  },
};

export default function settingsReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
