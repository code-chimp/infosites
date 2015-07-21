var config = require('./');

module.exports = {
  watch: config.sourceDirectory + '/views/**/*.html',
  src: [config.sourceDirectory + '/views/**/*.html', '!**/{layouts,shared}/**'],
  dest: config.distDirectory,
  dataDirectory: config.sourceDirectory + '/views/data/',
  siteInfo: config.sourceDirectory + '/views/data/site-info.json',
  decksInfo: config.sourceDirectory + '/views/data/decks.json',
  postsInfo: config.sourceDirectory + '/views/data/posts.json',
  nunjucks: [config.sourceDirectory + '/views/'],
  htmlmin: {
    collapseWhitespace: true
  }
};
