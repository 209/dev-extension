import * as types from './actionTypes';

export const activeUrlChanged = (activeUrl) => ({
  type: types.ACTIVE_URL_CHANGED,
  activeUrl,
});

export const addChromeEventsListeners = () => ({
  type: types.ADD_CHROME_EVENTS_LISTENERS,
});

export const availableUpdate = () => ({
  type: types.AVAILABLE_UPDATE,
});
