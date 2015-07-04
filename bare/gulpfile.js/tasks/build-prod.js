var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:prod', function (cb) {
  process.env.NODE_ENV = 'production';
  gulpSequence('clean', ['images'], ['sass'], cb);
});
