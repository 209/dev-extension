const path = require('path');

const devCommon = require('./devCommon');
const src = '../browser/extension/injects';

module.exports = {
  ...devCommon,
  entry: {
    // content script & page script cannot use HMR due to CSP.
    // That's why devStatic is separated from devReloadable and
    // the best way to develop these two scripts is "webpack --watch" & full page reload.
    injectCommon: [path.join(__dirname, `${src}/common`)],
  },
};
