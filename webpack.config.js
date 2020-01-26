const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
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
    historyApiFallback: true
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
              limit: 10000
            }
          }
        ]
      }
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
    }),
  ],
};
