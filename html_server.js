function start_html_server() {
    const http = require('http');
    const fs = require('fs');
    const path = require('path');
  
    const hostname = '0.0.0.0';
    const port = 8080;
  
    const server = http.createServer(function(request, response) {
      let filePath = '.' + request.url;
      if (filePath === './') {
        filePath = './index.html';
      }
      let extname = String(path.extname(filePath)).toLowerCase();
      let contentType = '';
      switch (extname) {
        case '.html':
          contentType = 'text/html';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
          contentType = 'image/jpg';
          break;
        case '.jpeg':
          contentType = 'image/jpeg';
          break;
        case '.webp':
          contentType = 'image/webp';
          break;
        case '.svg':
          contentType = 'image/svg+xml';
          break;
        default:
          contentType = 'application/octet-stream';
      }
  
      fs.readFile(filePath, function(error, content) {
        if (error) {
          if (error.code == 'ENOENT') {
            response.writeHead(404);
            response.end('404 Not Found');
          } else {
            response.writeHead(500);
            response.end('500 Internal Server Error');
          }
        } else {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        }
      });
  
    }).listen(port, hostname, () => {
        console.log("Server (Local): port 8080");
        console.log("Server running at http://web-t6140d879-62e7.docode.fi.qwasar.io");
    });
  }
  
  start_html_server();  