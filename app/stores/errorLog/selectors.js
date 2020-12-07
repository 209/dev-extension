const getRoot = (state) => state.stores;

export const getErrors = (state) => {
  const {errors} = getRoot(state);

  return errors;
};
