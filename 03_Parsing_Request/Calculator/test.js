const addedValue = require("./addition");

const userRequestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <div style="text-align:center">
      <h1>Wecome To The Coding World.</h1>
      <a href="/calculator">Go to next</a>
    </div>
    `);
    return res.end();
  } else if (req.url === "/calculator" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
   <form action="/calculate-result" method="post"  style="text-align:center">
      <label for="value1">Enter first Value:</label>
      <input type="number" name="value1" required><br><br>
      <label for="value2">Enter second Value:</label>
      <input type="number" name="value2" required>
      <br><br>
      <input type="submit" value="Sum">
  </form>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return addedValue(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Page 404 not found!!!</h1>");
  return res.end();
};

module.exports = userRequestHandler;
