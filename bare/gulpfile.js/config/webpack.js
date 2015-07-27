'use strict';
var path = require('path');
var paths = require('./');
var webpack = require('webpack');
var webpackManifest = require('../lib/webpack-manifest');

module.exports = function (env) {
  var jsSrc = path.resolve(paths.sourceAssets + '/js/');
  var jsDest = paths.distDirectory + '/js/';
  var publicPath = 'js/';

  var webpackConfig = {
    context: jsSrc,
    plugins: [],
    resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        jquery: 'jquery/dist/jquery'
      }
    },
    module: {
      loaders: [
        {
          test: /(\.js$)|(\.jsx$)/,
          loader: 'babel-loader?stage=1',
          exclude: /node-modules/
        }
      ]
    }
  };

  if (env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = {
      main: './main.js',
      vendor: ['jquery', 'lodash']
    };

    webpackConfig.output = {
      path: jsDest,
      filename: env === 'prod' ? '[name]-[hash].js' : '[name].js',
      publicPath: publicPath
    };

    // vendor dependencies into shared.js
    /* eslint-disable new-cap */
    // jscs:disable
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: env === 'prod' ? '[name]-[hash].js' : '[name].js'
      })
    );

    webpackConfig.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'root.jQuery': 'jquery',
        _: 'lodash',
        underscore: 'lodash',
        'window._': 'lodash',
        'root._': 'lodash'
      })
    );
    // jscs:enable
    /* eslint-enable new-cap */
  }

  switch (env) {
    case 'prod':
      /* eslint-disable new-cap */
      // jscs:disable
      webpackConfig.plugins.push(
        new webpackManifest(publicPath, 'dist'),
        new webpack.DefinePlugin({
          'process-env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin()
      );
      // jscs:enable
      /* eslint-enable new-cap */
      break;

    case 'dev':
      webpackConfig.devtool = 'source-map';
      webpack.debug = true;
  }

  return webpackConfig;
};
