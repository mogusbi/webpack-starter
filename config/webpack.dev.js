'use strict';

var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
