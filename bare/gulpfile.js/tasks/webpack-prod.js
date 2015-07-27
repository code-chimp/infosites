var gulp = require('gulp');
var webpack = require('webpack');
var config = require('../config/webpack')('prod');
var logger = require('../lib/compile-logger');

gulp.task('webpack:prod', function (cb) {
  webpack(config, function (err, stats) {
    logger(err, stats)
    cb();
  });
});
