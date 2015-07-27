var gulp = require('gulp');
var browserSync = require('browser-sync');
var webpack = require('webpack');
var config = require('../config/webpack')('dev');
var logger = require('../lib/compile-logger');

gulp.task('webpack:dev', function (cb) {
  var built = false

  webpack(config).watch(200, function (err, stats) {
    logger(err, stats)
    browserSync.reload()
    // On the initial compile, let gulp know the task is done
    if (!built) {
      built = true; cb();
    }
  });
});
