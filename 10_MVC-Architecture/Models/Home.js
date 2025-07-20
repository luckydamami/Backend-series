const path = require("path");
const rootDir = require("../utils/rootPath");
const fs = require("fs");

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
    Home.fetchAll((registerdHomes) => {
      registerdHomes.push(this);
      const dataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(dataPath, JSON.stringify(registerdHomes), (err) => {
        console.log("Something went wrong!", err);
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir, "data", "homes.json");
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
