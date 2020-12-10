import * as types from './actionTypes';

export const init = (url) => ({
  type: types.INIT,
  url,
});
