import * as types from './actionTypes';

export const toggleProcessing = (isProcessing) => ({
  type: types.TOGGLE_PROCESSING,
  isProcessing,
});

export const init = (url) => ({
  type: types.INIT,
  url,
});

export const reInit = () => ({
  type: types.RE_INIT,
});

export const sendToSF = (data) => ({
  type: types.SEND_TO_SF,
  data,
});

export const sendToLister = (data) => ({
  type: types.SEND_TO_LISTER,
  data,
});

export const reload = () => ({
  type: types.RELOAD,
});

export const sendReadyToSF = () => ({
  type: types.SEND_TO_LISTER_READY_EVENT_SG,
});
