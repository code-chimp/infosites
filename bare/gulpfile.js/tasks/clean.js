'use strict';
var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function (cb) {
  del([
    config.distDirectory + '/{css,img,js,fonts}',
    config.distDirectory + '/**/*.{html,txt,ico,png,json,xml}'
  ], cb);
});
