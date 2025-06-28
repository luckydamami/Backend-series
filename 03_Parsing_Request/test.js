const add = require("./addition");

const userRequestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <div>
    <h1>Wecome To The Coding World.</h1>
    <a href="/calculator">Go to next</a>
    </div>
      `);
    return res.end();
  } else if (req.url === "/calculator" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
   <form action="/calculate-result" method="post">
    <label for="value1">Enter first Value:</label>
    <input type="number" name="value1" required>
    <label for="value2">Enter second Value:</label>
    <input type="number" name="value2" required>
    <br><br>
    <input type="submit" value="Sum">
  </form>   
  `);
    return res.end();
  } else if (req.url === "./calculator-result" && req.method === "POST") {
    add();
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Something went wrong!</h1>");
  return res.end();
};

module.exports = userRequestHandler;
