var gulp = require('gulp');
var webpack = require('webpack');
var browserSync = require('browser-sync');
var assign = require('object-assign');
var logger = require('../lib/compile-logger');
var config = require('../config/webpack')('dev');

gulp.task('webpack:dev', function (cb) {
  var built = false;

  webpack(config).watch(200, function (err, stats) {
    logger(err, stats);
    browserSync.reload();

    if (!built) {
      built = true;
      cb();
    }
  })
});
