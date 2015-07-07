var gulp = require('gulp');
var revReplace = require('gulp-rev-replace');
var config = require('../../config');

gulp.task('update-html', ['rev-css'], function () {
  var manifest = gulp.src(config.distDirectory + '/rev-manifest.json');

  return gulp.src(config.distDirectory + '/**/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.distDirectory));
});
