const express = require("express");
const rootDir = require("../utils/rootPath");
const path = require("path");

const userRouter = express.Router();

userRouter.get("/contact-us", (req, res, next) => {
  console.log("handling /contact-us path for GET request");
  res.sendFile(path.join(rootDir, "views", "userDetail.html"));
});

userRouter.post("/contact-us", (req, res, next) => {
  console.log("User Details : ", req.body);
  res.sendFile(path.join(rootDir, "views", "submit.html"));
});

module.exports = userRouter;
