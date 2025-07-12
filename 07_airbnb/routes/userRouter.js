const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log("First handling", req.body);
  res.send(``);
});

module.exports = userRouter;
