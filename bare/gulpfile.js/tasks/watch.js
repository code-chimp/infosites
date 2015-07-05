var gulp = require('gulp');
var watch = require('gulp-watch');
var images = require('../config/images');
var sass = require('../config/sass');
var html = require('../config/html');

gulp.task('watch', ['browserSync'], function () {
  watch(images.src, function () { gulp.start('images'); });
  watch(sass.watch, function () { gulp.start('sass'); });
  watch(html.watch, function () { gulp.start('html'); });
});
