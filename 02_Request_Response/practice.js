const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
  <div class="navbar">
    <a href="/">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/kids">Kids</a>
    <a href="/cart">Cart</a>
  </div>
  <div>
    <h1>Welcome to Our Store!</h1>
    <p>Explore our collection for Men, Women, and Kids.</p>
  </div>`);
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Men page!</h1>`);
    res.write(`<h1><a href="/">Go to home</a></h1>`);
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Men page!</h1>`);
    res.write(`<h1><a href="/">Go to home</a></h1>`);
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Men page!</h1>`);
    res.write(`<h1><a href="/">Go to home</a></h1>`);
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to Men page!</h1>`);
    res.write(`<h1><a href="/">Go to home</a></h1>`);
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Something went wrong!</h1>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`your server start successfully on http://localhost:${PORT}`);
});
