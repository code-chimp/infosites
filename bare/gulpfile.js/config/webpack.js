var path = require('path');
var paths = require('./');
var webpack = require('webpack');
var webpackManifest = require('../lib/webpack-manifest');

module.exports = function (env) {
  var jsSrc = path.resolve(paths.sourceAssets + '/js/');
  var jsDest = paths.distDirectory + '/js/';
  var distPath = 'js/';

  var webpackConfig = {
    context: jsSrc,
    plugins: [],
    resolve: {
      extensions: ['', 'js']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader?stage=1',
          exclude: /node-modules/
        }
      ]
    }
  };

  if (env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = {
      main: ['./main.js']
    };

    webpackConfig.output = {
      path: jsDest,
      filename: env === 'prod' ? '[name]-[hash].js' : '[name].js',
      publicPath: distPath
    };

    // vendor dependencies into shared.js
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'shared',
        filename: env === 'prod' ? '[name]-[hash].js' : '[name].js'
      })
    );
  }

  switch (env) {
    case 'prod':
      webpackConfig.plugins.push(
        new webpackMainfest(distPath, 'dist'),
        new webpack.DefinePlugin({
          'process-env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin()
      );
      break;

    case 'dev':
      webpackConfig.devtool = 'source-map';
      webpack.debug = true;
  }

  return webpackConfig;
}
