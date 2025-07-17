const express = require("express");
const homeControllers = require("../Controllers/Homes");

const hostRouter = express.Router();

hostRouter.get("/add-home", homeControllers.getAddHome);
hostRouter.post("/add-home", homeControllers.postAddHome);

module.exports = hostRouter;
