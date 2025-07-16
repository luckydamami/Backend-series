const express = require("express");
const path = require("path");

const rootDir = require("../utils/rootPath");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  console.log("/add-home path handling for GET request");
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration successfully!!", req.body);
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

module.exports = hostRouter;
