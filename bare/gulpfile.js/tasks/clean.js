var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function (cb) {
  del([
    config.distDirectory + '/{css,img,js}',
    config.distDirectory + '/**/*.{html,txt,ico}'
  ], cb);
});
