'use strict';
var config = require('./');

module.exports = {
  server: {
    baseDir: config.distDirectory
  },
  files: ['dist/**/*.html']
};
