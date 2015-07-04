var config = require('./');

module.exports = {
  watch: config.sourceDirectory + '/views/**/*.html',
  src: [config.sourceDirectory + '/views/**/*.html', '!**/{layouts,shared}/**'],
  dest: config.distDirectory,
  nunjucks: {
    options: {
      layoutdir: config.sourceDirectory + '/views/layouts'
    }
  },
  htmlmin: {
    collapseWhitespace: true
  }
};
