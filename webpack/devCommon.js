const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode:    'development',
  // Note: don't use 'eval-*'. it causes "'unsafe-eval' is not an allowed CSP error" when page script injected
  devtool: 'inline-cheap-source-map',

  output:  {
    path:          path.join(__dirname, '../dev/js'),
    filename:      '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  // '*' allows to use: import A from 'file.ext'
  // '.js' allows to use: import B from 'script' (This will import script.js)
  resolve: {
    extensions: ['*', '.js'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
  ],

  optimization: {
    minimize:       false,
    noEmitOnErrors: true,
  },

  module: {
    rules: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        use:     {
          loader: 'babel-loader',
        },
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
