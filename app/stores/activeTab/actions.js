import * as types from './actionTypes';

export const update = ({ editorInfo, sessionStore }) => ({
  type: types.UPDATE,
  editorInfo,
  sessionStore,
});

export const clear = () => ({
  type: types.CLEAR,
});

export const getData = () => ({
  type: types.GET_DATA,
});
