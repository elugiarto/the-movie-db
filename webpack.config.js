const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'script.js',
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    disableHostCheck: true,
    port: process.env.PORT || 8080,
    host: process.env.TMDB_HOST || '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
    }),
    new webpack.DefinePlugin({
      JUMBO_TMDB_API_KEY: `"${process.env.JUMBO_TMDB_API_KEY}"`,
    }),
  ],
};
