import * as types from './actionTypes';

export const setError = (error) => ({ type: types.SET_ERROR, error });
export const setErrorsRead = () => ({ type: types.SET_ERRORS_READ });
export const clearErrors = () => ({ type: types.CLEAR_ERRORS });
