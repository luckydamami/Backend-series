const express = require("express");
const homeControllers = require("../Controllers/Homes");

const userRouter = express.Router();

userRouter.get("/", homeControllers.getHome);

module.exports = userRouter;
