const path = require("path");
const rootDir = require("../utils/rootPath"); //importing modules for file reading and writing.
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

  //home ke object ko read karega, list me add karega aur wapas home.json file me likhega.
  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registerdHomes) => {
      registerdHomes.push(this);
      const dataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(dataPath, JSON.stringify(registerdHomes), (err) => {
        console.log("Something went wrong!", err);
      });
    });
  }

  //homes.json ko read karta hai aur json parse karke data return karega callback me
  static fetchAll(callback) {
    const filePath = path.join(rootDir, "data", "homes.json");
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((registerdHomes) => {
      const homeFound = registerdHomes.find(
        (eachHome) => eachHome.id === homeId
      );
      callback(homeFound);
    });
  }
};
