const express = require("express");
const path = require("path");
const rootDir = require("../utils/rootPath");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log("home / path handling for GET request");
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
