var config = require('./');

module.exports = {
  watch: config.sourceDirectory + '/views/**/*.html',
  src: [config.sourceDirectory + '/views/**/*.html', '!**/{layouts,shared}/**'],
  dest: config.distDirectory,
  dataDirectory: config.sourceDirectory + '/views/data/',
  siteInfo: config.sourceDirectory + '/views/data/site-info.json',
  nunjucks: [config.sourceDirectory + '/views/'],
  htmlmin: {
    collapseWhitespace: true
  }
};
