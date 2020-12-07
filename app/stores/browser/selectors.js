const getRoot = (state) => state.chrome;

export const getActiveUrl = (state) => getRoot(state).activeUrl;
export const getIsAvailableUpdate = (state) => getRoot(state).isAvailableUpdate;
