var normalizePath = require('node-normalize-scss').includePaths;
var config = require('./');

module.exports = {
  autoprefixer: {browsers: ['last 2 version']},
  src: config.sourceAssets + '/sass/style.scss',
  watch: config.sourceAssets + '/sass/**/*.scss',
  dest: config.distDirectory + '/css',
  settings: {
    includePaths: [normalizePath],
    sourceComments: 'map',
    style: 'nested',
    indentedSyntax: false,
    imagePath: 'img'
  }
};
