const path = require("path");
const rootDir = require("../utils/rootPath");
const fs = require("fs");
const favrouiteClass = require("./favrouite");

const homeDataPath = path.join(rootDir, "data", "homes.json");
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
      if (this.id) {
        registerdHomes = registerdHomes.map((home) =>
          home.id === this.id ? this : home
        );
      } else {
        this.id = Math.random().toString();
        registerdHomes.push(this);
      }

      fs.writeFile(homeDataPath, JSON.stringify(registerdHomes), (err) => {
        console.log("Something went wrong!", err);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
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

  static deleteById(homeId, callback) {
    this.fetchAll((registerdHomes) => {
      registerdHomes = registerdHomes.filter((Home) => Home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(registerdHomes), (error) => {
        favrouiteClass.deleteById(homeId, callback);
      });
    });
  }
};
