const express = require("express"); //External module
const http = require("http"); //Core module
//const requestHandler = require("./user"); //Local module

const app = express();

app.use("/", (req, res, next) => {
  console.log("This is first middleware!", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("This is first middleware!", req.url, req.method);
  next();
});
app.use("/submit-details", (req, res, next) => {
  console.log("This is second middleware!");
  res.send("<h1>Handling express middlewares!!</h1>");
});
const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(
    `Your server start successfully on port http://localhost:${PORT}`
  );
});
