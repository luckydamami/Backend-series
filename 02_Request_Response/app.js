const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
   <form action="/submit-details" method="post">
    <label for="username">Username:</label>
    <input type="text" name="username" required>
    <br><br>

    <label>Gender:</label><br>
    <input type="radio" name="gender" value="male" required>
    <label for="male">Male</label><br>
    <input type="radio" name="gender" value="female">
    <label for="female">Female</label><br>
    <input type="radio" name="gender" value="other">
    <label for="other">Other</label><br><br>
    <input type="submit" value="Submit">
  </form>   
  `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user-details.txt", "Lucky Damami");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Something went wrong!!!</h1>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(
    `Your server start successfully on port http://localhost:${PORT}`
  );
});
