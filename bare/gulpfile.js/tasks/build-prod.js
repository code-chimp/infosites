'use strict';
var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:prod', function (cb) {
  process.env.NODE_ENV = 'production';

  gulpSequence(
    'clean',
    ['lint'],
    ['statics', 'fonts', 'images'],
    ['sass', 'webpack:prod'],
    'html',
    'rev', cb);
});
