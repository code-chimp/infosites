'use strict';
var config = require('./');

module.exports = {
  src: config.sourceAssets + '/fonts/**/*',
  dest: config.distDirectory + '/fonts'
};
