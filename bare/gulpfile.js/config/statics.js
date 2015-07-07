var config = require('./');

module.exports = {
  src: config.sourceAssets + '/*.{txt,ico}',
  dest: config.distDirectory
};
