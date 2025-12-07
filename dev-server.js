const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5175;
const DIST_DIR = path.join(__dirname, 'dist');

// Route mappings
const routeMap = {
  '/user': '/index-user.html',
  '/vendor': '/index-vendor.html',
  '/drivers': '/index-drivers.html',
  '/promo': '/index-promo.html',
  '/': '/index.html',
  // User pages
  '/user/privacy-policy': '/pages/user/privacy-policy.html',
  '/user/terms-conditions': '/pages/user/terms-conditions.html',
  '/user/cookie-policy': '/pages/user/cookie-policy.html',
  '/user/about-us': '/pages/user/about-us.html',
  '/user/faq': '/pages/user/faq.html',
  '/user/how-it-works': '/pages/user/how-it-works.html'
};

const server = http.createServer((req, res) => {
  let filePath = req.url;

  // Handle route mapping
  if (routeMap[filePath]) {
    filePath = routeMap[filePath];
  }

  // Remove query strings
  filePath = filePath.split('?')[0];

  // Construct full file path
  const fullPath = path.join(DIST_DIR, filePath);

  // Security check - prevent directory traversal
  if (!fullPath.startsWith(DIST_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  // Try to serve the file
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      // If file not found and it's a directory, try index.html
      if (err.code === 'ENOENT' && !path.extname(fullPath)) {
        fs.readFile(path.join(fullPath, 'index.html'), (err2, data2) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Page Not Found</h1><p>Requested: ' + req.url + '</p>');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data2);
          }
        });
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1><p>Requested: ' + req.url + '</p>');
      }
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      const contentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.webp': 'image/webp',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
      };
      const contentType = contentTypeMap[ext] || 'application/octet-stream';
      
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n✨ Development server running at:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`   http://localhost:${PORT}/user`);
  console.log(`   http://localhost:${PORT}/vendor`);
  console.log(`   http://localhost:${PORT}/drivers`);
  console.log(`   http://localhost:${PORT}/promo\n`);
});
