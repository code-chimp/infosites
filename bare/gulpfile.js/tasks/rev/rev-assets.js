var gulp = require('gulp');
var rev = require('gulp-rev');
var config = require('../../config');
// var iconFontConfig = require('../../config/icon-font');

gulp.task('rev-assets', function () {
  var notThese = '!' + config.distDirectory + '/**/*+(css|js|json|html)';
  // var orThese = '!' + iconFontConfig.dest + '/' + iconFontConfig.options.fontName + '.{eot,woff,woff2,ttf}';

  return gulp.src([config.distDirectory + '/**/*', notThese])
    .pipe(rev())
    .pipe(gulp.dest(config.distDirectory))
    .pipe(rev.manifest('dist/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
