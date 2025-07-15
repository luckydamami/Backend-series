const express = require("express");
const rootDir = require("../utils/rootPath");
const path = require("path");

const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  console.log("handling / path for GET request");
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
