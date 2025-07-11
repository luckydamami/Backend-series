const express = require("express"); //External module
const http = require("http"); //Core module
//const requestHandler = require("./user"); //Local module

const app = express();

app.use("/", (req, res, next) => {
  console.log("Came in first middleware!", req.url, req.method);
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in second middleware!", req.url, req.method);
  res.send("<h1>Welcome to the complete coding!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Came in another middleware!", req.url, req.method);
  res.send("<h1>Came from another middleware!</h1>");
});

const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(
    `Your server start successfully on port http://localhost:${PORT}`
  );
});
