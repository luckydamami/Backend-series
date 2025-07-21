const express = require("express");
const homeControllers = require("../Controllers/Controllers_home");

const userRouter = express.Router();

userRouter.get("/", homeControllers.getHome);

module.exports = userRouter;
