const express = require("express"); //External module
const http = require("http"); //Core module
//const requestHandler = require("./user"); //Local module

const app = express();

app.use("/", (req, res, next) => {
  console.log("run first middleware!", req.url, req.method);
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("run second middleware!", req.url, req.method);
  res.send("<p>came from first middleware!");
});

const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(
    `Your server start successfully on port http://localhost:${PORT}`
  );
});
