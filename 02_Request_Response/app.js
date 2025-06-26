const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>User Form</h2>
    <form action="/submit">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <br><br>

    <label>Gender:</label><br>
    <input type="radio" id="male" name="gender" value="male" required>
    <label for="male">Male</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br>
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label><br><br>

    <input type="submit">
  </form>
  `);
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<h1>Something went wrong.....!</h1>`);
  res.end();
});

let PORT = 3000;
server.listen(PORT, () => {
  console.log(
    `Your server start successfully on port http://localhost:${PORT}`
  );
});
