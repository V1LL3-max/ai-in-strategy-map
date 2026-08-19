const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.ico': 'image/x-icon'
};

http.createServer(function (req, res) {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const file = path.join(root, path.normalize(p));
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end();
    return;
  }
  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'public, max-age=300'
    });
    res.end(data);
  });
}).listen(process.env.PORT || 3000, '0.0.0.0', function () {
  console.log('Map is up on port ' + (process.env.PORT || 3000));
});
