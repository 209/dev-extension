// eslint-disable-next-line no-underscore-dangle
export default () => {
  try {
    return window.document.getElementsByClassName('devBuildLabel')[0].children[0].innerText;
  } catch (e) {
    return false;
  }
};
