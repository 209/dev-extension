const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const src = '../browser/extension/injects';

module.exports = {
  mode:         'production',
  entry:        {
    window:       [path.join(__dirname, '../browser/extension/window')],
    popup:        [path.join(__dirname, '../browser/extension/popup')],
    background:   [path.join(__dirname, '../browser/extension/background')],
    injectCommon: [path.join(__dirname, `${src}/common`)],
  },
  output:       {
    path:          path.join(__dirname, '../build/js'),
    filename:      '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  plugins:      [
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  optimization: {
    minimize:        false,
    occurrenceOrder: true,
  },
  performance:  {
    maxEntrypointSize: 512000000,
    maxAssetSize:      512000000,
  },
  resolve:      {
    extensions: ['*', '.js'],
  },
  module:       {
    rules: [
      {
        test:    /\.js$/,
        loader:  'babel-loader',
        exclude: /node_modules/,
      },
      {
        test:    /\.css$/,
        exclude: [
          path.resolve(__dirname, '../node_modules/antd/'),
        ],
        use:     [
          'style-loader',
          // Note: don't use sourceMap for content/page's CSS. it will cause CSP error.
          // if you want sourceMap apply to popup or window, have separated js file instead of using devCommon
          {
            loader:  'css-loader',
            options: {
              modules:        true,
              importLoaders:  1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader:  'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
        ],
      },
      {
        test:    /\.css$/,
        include: [
          path.resolve(__dirname, '../node_modules/antd/'),
        ],
        use:     [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use:  [
          'style-loader',
          {
            loader:  'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico|woff|woff2|eot|ttf)$/,
        use:  [
          {
            // import 'imageFile' will be inlined into script with base64encoded.
            loader: 'url-loader?limit=100000',
          },
        ],
      },
    ],
  },
};
