const express = require("express");

// const path = require("path");
// const rootDir = require("../utils/rootPath");

const { registerdHomes } = require("./hostRouter");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log(registerdHomes);
  res.render("home", {
    registerdHomes: registerdHomes,
    pageTitle: "Home page",
  });
});

module.exports = userRouter;
