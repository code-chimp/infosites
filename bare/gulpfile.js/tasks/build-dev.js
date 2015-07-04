var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:dev', function (cb) {
  gulpSequence('clean', ['images'], ['sass'], ['watch', 'browserSync'], cb);
});
