const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { exec } = require('child_process');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

console.log('🧛‍♀️ Starting Eternal Hearts: A Ravencroft Romance...');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Default to index.html for root and unknown paths
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }
  
  // Remove leading slash and construct file path
  const filePath = path.join(__dirname, 'dist', pathname.slice(1));
  
  // Check if file exists
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If file not found, serve index.html (SPA routing)
      const indexPath = path.join(__dirname, 'dist', 'index.html');
      fs.readFile(indexPath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      return;
    }
    
    // Get file extension and corresponding MIME type
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, 'localhost', () => {
  const gameUrl = `http://localhost:${PORT}`;
  console.log(`✓ Game server running at ${gameUrl}`);
  console.log('🌹 Opening game in your browser...');
  
  // Open browser based on platform
  const openCommand = process.platform === 'darwin' ? 'open' :
                     process.platform === 'win32' ? 'start ""' : 'xdg-open';
  
  exec(`${openCommand} ${gameUrl}`, (error) => {
    if (error) {
      console.log(`📱 Please open your browser and visit: ${gameUrl}`);
    }
  });
  
  console.log('\n💀 Game is running! Press Ctrl+C to stop.\n');
});

process.on('SIGINT', () => {
  console.log('\n🌙 Shutting down gracefully...');
  server.close(() => process.exit(0));
});