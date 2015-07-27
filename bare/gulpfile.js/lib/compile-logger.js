'use strict';
var gutil = require('gulp-util');
var prettifyTime = require('./prettify-time');
var handleErrors = require('./handle-errors');

module.exports = function (err, stats) {
  if (err) {
    throw new gutil.PluginError('webpack', err);
  }

  var statColor =
    stats.compilation.warnings.length < 1 ?
      'green' :
      'red';

  if (stats.compilation.errors.length) {
    stats.compilation.errors.forEach(function (error) {
      handleErrors(error);
      statColor = 'red';
    });
  }
  else {
    var compileTime = prettifyTime(stats.endTime - stats.startTime);
    gutil.log(gutil.colors[statColor](stats));
    gutil.log('Compiled with', gutil.colors.cyan('webpack:dev'), 'in',
      gutil.colors.magenta(compileTime));
  }
};
