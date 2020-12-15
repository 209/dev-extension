const getRoot = (state) => state.settings;

const getLocalHost = (state) => getRoot(state).localHost;
const getDesk = (state) => getRoot(state).desk;

export {
  getLocalHost,
  getDesk,
};

export default getRoot;
