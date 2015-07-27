'use strict';
var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:dev', function (cb) {
  gulpSequence(
    'clean',
    ['lint'],
    ['statics', 'fonts', 'images'],
    ['sass', 'webpack:dev', 'html'],
    ['watch', 'browserSync'], cb);
});
