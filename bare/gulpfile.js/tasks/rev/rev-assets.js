var gulp = require('gulp');
var rev = require('gulp-rev');
var revNapkin = require('gulp-rev-napkin');
var config = require('../../config');
// var iconFontConfig = require('../../config/icon-font');

gulp.task('rev-assets', function () {
  var notThese = '!' + config.distDirectory + '/**/*+(css|js|json|html|txt|xml)';
  var norThese = '!' + config.distDirectory + '/*.{ico,png}';
  // var orThese = '!' + iconFontConfig.dest + '/' + iconFontConfig.options.fontName + '.{eot,woff,woff2,ttf}';

  return gulp.src([config.distDirectory + '/**/*', notThese, norThese])
    .pipe(rev())
    .pipe(gulp.dest(config.distDirectory))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest('dist/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
