const express = require("express");
const hostControllers = require("../Controllers/hostController");

const hostRouter = express.Router(); //create a Router function from express

hostRouter.get("/add-home", hostControllers.getAddHome);
hostRouter.get("/host-homelist", hostControllers.getHostHome);
hostRouter.post("/host/add-home", hostControllers.postAddHome);

hostRouter.get("/host/edit-home/:homeId", hostControllers.getEditHome);

hostRouter.post("/host/edit-home", hostControllers.postEditHome);

hostRouter.post("/delete-home/:homeId", hostControllers.postDeleteHome);

module.exports = hostRouter;
