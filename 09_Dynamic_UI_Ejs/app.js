const express = require("express");
const path = require("path");

const rootDir = require("./utils/rootPath");
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404" });
});

const port = 3002;
app.listen(port, () => {
  console.log(`Sever Starting on http://localhost:${port}`);
});
