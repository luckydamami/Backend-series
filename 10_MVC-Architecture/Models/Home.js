const rootDir = require("../utils/rootPath");
const fs = require("fs");
const path = require("path");

const registerdHomes = [];

module.exports = class Home {
  constructor(houseName, location, rooms, price, ratings, photoUrl) {
    this.houseName = houseName;
    this.location = location;
    this.rooms = rooms;
    this.price = price;
    this.ratings = ratings;
    this.photoUrl = photoUrl;
  }

  save() {
    registerdHomes.push(this);
    const dataPath = path.join(rootDir, "data", "homeData.json");

    fs.writeFile(dataPath, JSON.stringify(registerdHomes), (error) => {
      console.log("File write concluded!", error);
    });
  }

  static fetchAll() {
    return registerdHomes;
  }
};
