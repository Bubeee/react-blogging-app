const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: 'index.html',
  inject: true,
  minify: false, // TODO: add prod minification
});

module.exports = {
  entry: resolve('src', 'index.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  stats: {
    colors: true
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map'
};
