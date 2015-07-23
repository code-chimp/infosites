var gulp = require('gulp');
var data = require('gulp-data');
var gulpIf = require('gulp-if');
var render = require('gulp-nunjucks-render');
var htmlmin = require('gulp-htmlmin');
var fs = require('fs');
var path = require('path');
var assign = require('object-assign');
var browserSync = require('browser-sync');
var config = require('../config/html');
var handleErrors = require('../lib/handle-errors');
var siteInfo = JSON.parse(fs.readFileSync(config.siteInfo));
var decksInfo = JSON.parse(fs.readFileSync(config.decksInfo));
var postsInfo = JSON.parse(fs.readFileSync(config.postsInfo));

// create a nicely formatted copyright
var copyrightStart = siteInfo.copyrightStart;
var currentYear = new Date().getFullYear();
var copyrightLine = copyrightStart;

if (currentYear > copyrightStart) {
  copyrightLine = copyrightStart + '&mdash;' + currentYear;
}

siteInfo.copyrightLine = copyrightLine;

// merge page specific data with the general site data and custom data files
var getPageData = function (file) {
  var pageInfo = JSON.parse(
    fs.readFileSync(config.dataDirectory + path.basename(file.path) + '.json'));

  var pageData = assign(siteInfo, decksInfo, postsInfo, pageInfo);
  // console.log(JSON.stringify(pageData));
  return pageData;
};

gulp.task('html', function () {
  // disable nunjucks watch
  render.nunjucks.configure(config.nunjucks, {
    watch: false
  });

  return gulp.src(config.src)
    .pipe(data(getPageData))
    .pipe(render())
    .on('error', handleErrors)
    .pipe(gulpIf(process.env.NODE_ENV === 'production', htmlmin(config.htmlmin)))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
