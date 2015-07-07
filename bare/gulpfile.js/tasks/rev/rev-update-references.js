var gulp = require('gulp');
var revReplace = require('gulp-rev-replace');
var config = require('../../config');

gulp.task('rev-update-references', ['rev-assets'], function () {
  var manifest = gulp.src(config.distDirectory + '/rev-manifest.json');

  return gulp.src(config.distDirectory + '/**/**.{css,js}')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.distDirectory));
});
