var gulp = require('gulp');
var gulpIf = require('gulp-if');
var render = require('gulp-nunjucks-render');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var config = require('../config/html');
var handleErrors = require('../lib/handle-errors');

gulp.task('html', function () {
  // disable nunjucks watch
  render.nunjucks.configure(config.nunjucks, {
    watch: false
  });

  return gulp.src(config.src)
    .pipe(render())
    .on('error', handleErrors)
    .pipe(gulpIf(process.env.NODE_ENV === 'production', htmlmin(config.htmlmin)))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
