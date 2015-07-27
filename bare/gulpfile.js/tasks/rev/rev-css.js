'use strict';
var gulp = require('gulp');
var rev = require('gulp-rev');
var revNapkin = require('gulp-rev-napkin');
var config = require('../../config');

gulp.task('rev-css', ['rev-update-references'], function () {
  return gulp.src(config.distDirectory + '/**/*.css')
    .pipe(rev())
    .pipe(minify())
    .pipe(gulp.dest(config.distDirectory))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest('dist/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
