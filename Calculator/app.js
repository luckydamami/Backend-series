//How to create server
const http = require("http");
const userRequestHandler = require("./test");

const server = http.createServer(userRequestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`your server start successfully on http://localhost:${PORT}`);
});
