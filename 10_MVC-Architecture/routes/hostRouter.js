const express = require("express");
const homeControllers = require("../Controllers/Controllers_home");

const hostRouter = express.Router(); //create a Router function from express

hostRouter.get("/add-home", homeControllers.getAddHome);
hostRouter.post("/add-home", homeControllers.postAddHome);

module.exports = hostRouter;
