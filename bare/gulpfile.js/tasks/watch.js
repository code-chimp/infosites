var gulp = require('gulp');
var watch = require('gulp-watch');
var images = require('../config/images');
var sass = require('../config/sass');
var html = require('../config/html');
var statics = require('../config/statics');
var fonts = require('../config/fonts');

gulp.task('watch', ['browserSync'], function () {
  watch(images.src, function () { gulp.start('images'); });
  watch(sass.watch, function () { gulp.start('sass'); });
  watch(html.watch, function () { gulp.start('html'); });
  watch(statics.src, function () { gulp.start('statics'); });
  watch(fonts.src, function () { gulp.start('fonts'); });
});
