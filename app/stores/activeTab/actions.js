import * as types from './actionTypes';

export const update = ({ editorInfo, sessionStore, source }) => ({
  type: types.UPDATE,
  editorInfo,
  sessionStore,
  source,
});

export const clear = () => ({
  type: types.CLEAR,
});

export const getData = () => ({
  type: types.GET_DATA,
});
