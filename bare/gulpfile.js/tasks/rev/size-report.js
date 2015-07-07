var gulp = require('gulp');
var sizereport = require('gulp-sizereport');
var config = require('../../config');
var repeatString = require('../../lib/repeat-string');

gulp.task('size-report', ['update-html'], function () {
  var hashedFiles = '/**/*-' + repeatString('[a-z,0-9]', 8) + '*.*';

  return gulp.src([config.distDirectory + hashedFiles, '*!rev-manifest.json'])
    .pipe(sizereport({
      gzip: true
    }));
});
