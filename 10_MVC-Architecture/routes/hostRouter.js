const express = require("express");
const hostControllers = require("../Controllers/hostController");

const hostRouter = express.Router(); //create a Router function from express

hostRouter.get("/add-home", hostControllers.getAddHome);
hostRouter.get("/host-homelist", hostControllers.getHostHome);
hostRouter.post("/add-home", hostControllers.postAddHome);
module.exports = hostRouter;
