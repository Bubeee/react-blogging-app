var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
          use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map'
};
