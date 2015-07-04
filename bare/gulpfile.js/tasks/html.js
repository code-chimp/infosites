var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var config = require('../config/html');
var handleErrors = require('../lib/handle-errors');

gulp.task('html', function () {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
