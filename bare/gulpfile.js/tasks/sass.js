'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var handleErrors = require('../lib/handle-errors');
var config = require('../config/sass');

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
