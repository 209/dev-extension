import configureStoreProd from './configureStoreProd';

const getStore = () => {
  return process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreProd;
};

export default getStore;
