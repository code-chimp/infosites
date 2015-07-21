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

/*console.log(JSON.stringify(siteInfo));
console.log('');
console.log(JSON.stringify(decksInfo));
console.log('');
console.log(JSON.stringify(postsInfo));
console.log('');
var foo = assign(siteInfo, decksInfo, postsInfo);
console.log(JSON.stringify(foo));
console.log('');*/

// create a nicely formatted copyright
var copyrightStart = siteInfo.copyrightStart;
var currentYear = new Date().getFullYear();
var copyrightLine = copyrightStart;

if (currentYear > copyrightStart) {
  copyrightLine = copyrightStart + '&mdash;' + currentYear;
}

siteInfo.copyrightLine = copyrightLine;

// merge page specific data with the general site data
var getPageData = function (file) {
  var pageInfo = JSON.parse(
    fs.readFileSync(config.dataDirectory + path.basename(file.path) + '.json'));

  console.log(JSON.stringify(file.path));
  console.log('');
  console.log(JSON.stringify(pageInfo));
  console.log('');

  var pageData = assign(siteInfo, decksInfo, postsInfo, pageInfo);

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
