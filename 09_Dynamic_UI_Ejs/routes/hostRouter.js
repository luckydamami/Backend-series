const express = require("express");
// const path = require("path");

// const rootDir = require("../utils/rootPath");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  console.log("/add-home path handling for GET request");
  res.render("addHome", { pageTitle: "Home Details" });
});

const registerdHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  registerdHomes.push({ houseName: req.body.houseName });
  console.log("Home Registration successfully!!", registerdHomes);
  res.render("homeAdded", { pageTitle: "Sucessfully Added" });
});

module.exports = { hostRouter, registerdHomes };
