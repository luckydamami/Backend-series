const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  console.log("First handling", req.url, req.method);
  res.send(``);
});

hostRouter.post("/host/add-home", (req, res, next) => {
  console.log("Third handling", req.body);
  res.send(``);
});

module.exports = hostRouter;
