var gulp = require('gulp');
var render = require('gulp-nunjucks-render');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var config = require('../config/html');
var handleErrors = require('../lib/handle-errors');

gulp.task('html', function () {
  render.nunjucks.configure(config.nunjucks, {watch: false});
  return gulp.src(config.src)
    .pipe(render())
    .on('error', handleErrors)
    //.pipe(htmlmin(config.htmlmin))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
