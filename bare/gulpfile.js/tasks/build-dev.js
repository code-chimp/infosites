var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:dev', function (cb) {
  gulpSequence(
    'clean',
    ['statics', 'fonts', 'images'],
    ['sass', 'html'],
    ['watch', 'browserSync'], cb);
});
