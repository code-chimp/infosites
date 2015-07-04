var gulp = require('gulp');
var watch = require('gulp-watch');
var images = require('../config/images');
var sass = require('../config/sass');

gulp.task('watch', ['browserSync'], function () {
  watch(images.src, function () { gulp.start('images'); });
  watch(sass.allSrc, function () { gulp.start('sass'); });
});
