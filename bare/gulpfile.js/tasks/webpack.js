'use strict';
var env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

var gulp = require('gulp');
var webpack = require('webpack');
var browserSync = require('browser-sync');
var logger = require('../lib/compile-logger');
var config = require('../config/webpack')(env);

gulp.task('webpack', function (cb) {
  var built = false;

  if (env === 'prod') {
    webpack(config, function (err, stats) {
      logger(err, stats);
      cb();
    });
  }
  else {
    webpack(config).watch(200, function (err, stats) {
      logger(err, stats);
      browserSync.reload();

      if (!built) {
        built = true;
        cb();
      }
    });
  }
});
