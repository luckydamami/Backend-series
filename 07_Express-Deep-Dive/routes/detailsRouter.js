const express = require("express");

const path = require("path");
const rootDir = require("../utils/rootPath");
const detailsRouter = express.Router();

detailsRouter.get("/contact-us", (req, res, next) => {
  console.log("handling /contact-us path for GET request");
  res.sendFile(path.join(rootDir, "views", "userDetails.html"));
});

detailsRouter.post("/contact-us", (req, res, next) => {
  console.log("handling /contact-us path for POST method", req.body);
  res.sendFile(path.join(rootDir, "views", "detailSubm.html"));
});

module.exports = detailsRouter;
