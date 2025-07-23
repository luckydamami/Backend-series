const express = require("express");
const path = require("path");

const errorControllers = require("./Controllers/errorControllers");
const rootDir = require("./utils/rootPath");
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.set("view engine", "ejs"); // For ejs template engine setup.
app.set("views", "views");

app.use(express.urlencoded());

app.use(express.static(path.join(rootDir, "public"))); //css file publicly access

app.use(storeRouter);
app.use(hostRouter); //Routing managment

app.use(errorControllers.get404);

const port = 3002;
app.listen(port, () => {
  console.log(`Sever Starting on http://localhost:${port}`);
});
