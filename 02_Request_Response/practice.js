const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <div class="navbar">
    <a href="#">Home</a>
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">Kids</a>
    <a href="#">Cart</a>
  </div>
  <div class="content">
    <h1>Welcome to Our Store!</h1>
    <p>Explore our collection for Men, Women, and Kids.</p>
  </div>
  `);
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Men page!</h1>`);
  } else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Men page!</h1>`);
  } else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Men page!</h1>`);
  } else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Men page!</h1>`);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`your server start successfully on http://localhost:${PORT}`);
});
