const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("first dummy middleware!", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("second dummy middleware!", req.url, req.method);
// });

app.get("/", (req, res, next) => {
  console.log("handling / path for Get method!", req.url, req.method);
  res.send("<h1>Welocome to complete coding!");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us path for Get method!", req.url, req.method);
  res.send(`<h1>Please enter your details : </h1>
   <form action="/contact-us" method="post">
    <label for="username">Username:</label>
    <input type="text" name="username" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="text" name="email" required>
    <br><br>
    <input type="submit" value="Submit">
  </form> `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("handling / path for Get method!", req.url, req.method);
  res.send("<h1>User details successfully submited!!</h1>");
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server start is successfully on http://localhost:${PORT}`);
});
