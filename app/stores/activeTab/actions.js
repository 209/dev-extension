import * as types from './actionTypes';

export const update = (editor) => ({
  type: types.UPDATE,
  editor,
});

export const clear = () => ({
  type: types.CLEAR,
});

export const getData = () => ({
  type: types.GET_DATA,
});
