const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript' };

http.createServer((request, response) => {
  let requestedPath = decodeURIComponent(request.url.split('?')[0]);
  if (requestedPath === '/') requestedPath = '/index.html';
  const file = path.resolve(root, `.${requestedPath}`);
  if (!file.startsWith(root)) { response.writeHead(403); response.end(); return; }
  fs.readFile(file, (error, data) => {
    if (error) { response.writeHead(404); response.end('No encontrado'); return; }
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    response.end(data);
  });
}).listen(8787, () => console.log('Romera disponible en http://localhost:8787'));
