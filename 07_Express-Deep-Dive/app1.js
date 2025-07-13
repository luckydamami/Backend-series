const express = require("express");

const path = require("path");
const rootDir = require("./utils/rootPath");

const homeRouter = require("./routes/homeRouter");
const detailsRouter = require("./routes/detailsRouter");

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use("/host", detailsRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const port = 3001;
app.listen(port, () => {
  console.log(`server start successfully on http://localhost:${port}`);
});
