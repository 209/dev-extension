import * as actionTypes from './actionTypes';

const initialState = {
  errors: [], // {type, text, date, read}
};

const actionsMap = {
  [actionTypes.SET_ERROR](state, action) {
    const { error } = action;

    return {
      ...state,
      errors: [...state.errors, error],
    };
  },
  [actionTypes.SET_ERRORS_READ](state, action) {
    const { storeId } = action;

    return {
      ...state,
      errors: state.errors.map(error => (({...error, read: true}))),
    };
  },
  [actionTypes.CLEAR_ERRORS](state) {
    return {
      ...state,
      errors: [],
    };
  },
};

export default function storesReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
