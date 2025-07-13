const express = require("express");

const rootDir = require("./utils/rootPath");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const port = 3002;
app.listen(port, () => {
  console.log(`Sever Starting on http://localhost:${port}`);
});
