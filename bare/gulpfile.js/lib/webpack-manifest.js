var fs = require('fs');
var path = require('path');

module.exports = function (distPath, dest, filename) {
  filename = filename || 'rev.manifest.json';

  return function () {
    this.plugin('done', function (stats) {
      var stats = stats.toJSON();
      var chunks = stats.assetsByChunkName;
      var manifest = {};

      for (var key in chunks) {
        manifest[distPath + key + '.js'] = distPath + chunks[key];
      }

      fs.writeFileSync(
        path.join(process.cwd(), dest, filename),
        JSON.stringify(manifest)
      );
    });
  };
}
