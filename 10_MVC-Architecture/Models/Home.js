const registerdHomes = [];

module.exports = class Home {
  constructor(houseName, price, rooms, location, ratings, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.rooms = rooms;
    this.location = location;
    this.ratings = ratings;
    this.photoUrl = photoUrl;
  }
  save() {
    registerdHomes.push(this);
  }
};
