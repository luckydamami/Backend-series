const path = require("path");
const rootDir = require("../utils/rootPath");
const fs = require("fs");

const favrouitesPath = path.join(rootDir, "data", "favrouites.json");

module.exports = class favrouiteClass {
  static addFavourites(homeId, callback) {
    favrouiteClass.getFavourites((favrouiteList) => {
      if (favrouiteList.includes(homeId)) {
        callback("Home is already added!!");
      } else {
        favrouiteList.push(homeId);
        fs.writeFile(favrouitesPath, JSON.stringify(favrouiteList), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favrouitesPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
