'use strict';
var gulp = require('gulp');
var config = require('../config/statics');

gulp.task('statics', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
