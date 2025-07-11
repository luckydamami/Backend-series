const express = require("express");
const http = require("http");

const app = express();

/*app.use((req, res, next) => {
  console.log("first dummy middleware!", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("Second dummy middleware!", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("another dummy middleware!", req.url, req.method);
  res.send("<h1>Welcome to the complete coding!</h1>");
});*/

app.get("/", (req, res, next) => {
  console.log("first path middleware!", req.url);
  next();
});

app.use("/contact-us", (req, res, next) => {
  console.log("second path middleware!", req.url);
  res.send("<h1>Hello ji welcome to the contact-us page!");

  app.get((req, res, next) => {
    console.log("first dummy middleware!", req.url);
    next();
  });
});

const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server start successfully on http://localhost:${PORT}`);
});
