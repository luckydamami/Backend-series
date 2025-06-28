const fs = require("fs");
const requestHandler = (req, res) => {
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
  } else if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parseBody);
      //const bodyObj = {};
      // for (const [key, value] of params.entries()) {
      //   bodyObj[key] = value;
      // }
      const bodyObj = Object.fromEntries(params);
      fs.writeFileSync("output.txt", JSON.stringify(bodyObj));
      console.log(bodyObj);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Something went wrong!!!</h1>");
  return res.end();
};

module.exports = requestHandler;
