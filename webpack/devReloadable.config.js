const path = require('path');

const devCommon = require('./devCommon');

module.exports = {
  ...devCommon,
  devServer:    {
    host:         '0.0.0.0',
    port:         3000,
    publicPath:   '/js/', // Make sure publicPath always starts and ends with a forward slash
    contentBase:  './dev',
    hot:          true,
    inline:       false,
  },
  entry:        {
    // array of script file added per entry will be merged to each entry point.
    window:     [path.join(__dirname, '../browser/extension/window')],
    popup:      [path.join(__dirname, '../browser/extension/popup')],
    background: [path.join(__dirname, '../browser/extension/background')],
  },
};
