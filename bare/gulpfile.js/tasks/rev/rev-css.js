var gulp = require('gulp');
var filter = require('gulp-filter');
var minify = require('gulp-minify-css');
var rev = require('gulp-rev');
var revNapkin = require('gulp-rev-napkin');
var uglify = require('gulp-uglify');
var config = require('../../config');

gulp.task('rev-css', ['rev-update-references'], function () {
  return gulp.src(config.distDirectory + '/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest(config.distDirectory))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest('dist/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
