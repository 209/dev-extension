import * as actionTypes from './actionTypes';

const initialState = {
  activeUrl:         '',
  isAvailableUpdate: false,
};

const actionsMap = {
  [actionTypes.ACTIVE_URL_CHANGED](state, action) {
    const { activeUrl } = action;

    return {
      ...state,
      activeUrl,
    };
  },
  [actionTypes.AVAILABLE_UPDATE](state) {
    return {
      ...state,
      isAvailableUpdate: true,
    };
  },
};

export default function browserReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
