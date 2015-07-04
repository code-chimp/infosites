var config = require('./');

module.exports = {
  src: config.sourceAssets + '/img/**/*.{gif,jpg,png}',
  dest: config.distDirectory + '/img'
};
