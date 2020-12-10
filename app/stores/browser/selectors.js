const getRoot = (state) => state.browser;

export const getActiveUrl = (state) => getRoot(state).activeUrl;
export const getIsAvailableUpdate = (state) => getRoot(state).isAvailableUpdate;
