const express = require("express");
const storeController = require("../Controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favrouite-list", storeController.getFavrouiteList);

module.exports = storeRouter;
