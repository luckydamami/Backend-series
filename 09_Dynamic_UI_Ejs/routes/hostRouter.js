const express = require("express");
// const path = require("path");

// const rootDir = require("../utils/rootPath");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.body);
  res.render("addHome", { pageTitle: "Home Details" });
});

const registerdHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  registerdHomes.push(req.body);
  console.log("Home Details : ", registerdHomes);
  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
});

module.exports = { hostRouter, registerdHomes };
