const http = require("http");
//const runtimeError = require("./Error");
const logicalError = require("./Error");

const server = http.createServer((req, res) => {
  // syntaxError();
  // runtimeError();
  logicalError();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(
    `Your server start successfully on port http://localhost:${PORT}`
  );
});
