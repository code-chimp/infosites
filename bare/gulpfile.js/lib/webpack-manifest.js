'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function (publicPath, dest, filename) {
  filename = filename || 'rev-manifest.json';

  return function () {
    this.plugin('done', function (stats) {
      stats = stats.toJson();
      var chunks = stats.assetsByChunkName;
      var manifest = {};

      for (var key in chunks) {
        manifest[publicPath + key + '.js'] = publicPath + chunks[key];
      }

      fs.writeFileSync(
        path.join(process.cwd(), dest, filename),
        JSON.stringify(manifest)
      );
    });
  };
};
