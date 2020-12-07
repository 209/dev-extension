const getRoot = (state) => state.common;

export const getIsProcessing = (state) => getRoot(state).isProcessing;
