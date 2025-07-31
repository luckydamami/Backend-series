const express = require("express");
const storeController = require("../Controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favrouites", storeController.getFavrouiteList);
storeRouter.post("/favrouites", storeController.postFavrouiteList);
storeRouter.post(
  "/favrouites/delete/:homeId",
  storeController.postDeleteFavrouite
);

storeRouter.get("/homes/:homeId", storeController.getHomeDetails);

module.exports = storeRouter;
