var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var normalizePath = require('node-normalize-scss').includePaths;

gulp.task('clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('sass', function () {
  gulp.src('src/sass/style.scss')
    .pipe(sass({
      includePaths: [normalizePath]
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function () {
  gulp.src('src/js/**/*')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('statics', function () {
  gulp.src(['src/*.html', 'src/*.txt', 'src/*.ico'])
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch(['src/*.html', 'src/*.txt', 'src/*.ico'], ['statics']);
});

gulp.task('default', ['sass', 'scripts', 'statics']);
