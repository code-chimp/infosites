'use strict';
var gulp = require('gulp');

// 1) Add md5 hashes to assets referenced by CSS and JS files
// 2) Manually hash EOT, TTF, and WOFF files
// 3) Update asset references with reved filenames in compiled css + js
// 4) Rev and compress CSS and JS files
// 5) Update asset references in HTML
// 6) Report file sizes

gulp.task('rev', [
  'rev-assets',
  'rev-update-references',
  'rev-css',
  'update-html',
  'size-report'
]);
