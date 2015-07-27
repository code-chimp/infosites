'use strict';
var config = require('./');

module.exports = {
  src: config.sourceAssets + '/*.{ico,json,png,txt,xml}',
  dest: config.distDirectory
};
