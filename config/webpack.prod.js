'use strict';

var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var helpers = require('./helpers');
var ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = merge(common, {
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  htmlLoader: {
    minimize: false
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
