const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use((req, res, next) => {
//   console.log("First dummy middleware!!", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second dummy middleware!!", req.url, req.method);
//   next();
// });

app.get("/", (req, res, next) => {
  console.log("handling / path for GET request", req.url, req.method);
  next();
});

app.get("/contact-us", (req, res, next) => {
  console.log("handling /contact-us path for GET request", req.url, req.method);
  res.send(`
  <h1>Enter Your Name and Email:</h1><br><br>
  <form action="/contact-us" method="post">
  <label for="username">Username:</label>
  <input type="text" name="username" required>
  <br>
  <label for="email">Username:</label>
  <input type="text" name="email" required>
  <br>
  <input type="submit" value="Submit">
  </form>
  `);
});

app.use(bodyParser.urlencoded()); //input fields se data lene ke liye middlewares!

app.post("/contact-us", (req, res, next) => {
  console.log("after bodyparser!!", req.url, req.method, req.body);
  res.send("<h1>your details successfully submited!!</h1>");
});

const port = 3001;
app.listen(port, () => {
  console.log(`server start successfully on http://localhost:${port}`);
});
