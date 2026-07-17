const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(
    '<h1>Symplax Test: It Works! 🚀</h1><p>This is a simple Node.js server. testing auto push.</p>'
  );
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
