// Exercise 2: A minimal HTTP server with routing
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/") {
    res.end("<h1>Home</h1><p><a href='/about'>About</a></p>");
  } else if (req.url === "/about") {
    res.end("<h1>About</h1><p>Node.js learning server</p>");
  } else {
    res.end("<h1>404</h1>");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
