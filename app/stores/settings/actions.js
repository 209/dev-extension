import * as types from './actionTypes';

export const init = () => ({
  type: types.INIT,
});

export const updateLocalHost = (localHost) => ({
  type: types.UPDATE_LOCAL_HOST,
  localHost,
});

export const updateDesk = (desk) => ({
  type: types.UPDATE_DESK,
  desk,
});
