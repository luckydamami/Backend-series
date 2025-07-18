const Home = require("../Models/Home");

exports.getAddHome = (req, res, next) => {
  console.log(req.body);
  res.render("addHome", { pageTitle: "Home Details" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, location, rooms, price, ratings, photoUrl } = req.body;
  const home = new Home(houseName, location, rooms, price, ratings, photoUrl);
  home.save();
  console.log("Home Details : ", req.body);
  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
};

exports.getHome = (req, res, next) => {
  const registerdHomes = Home.fetchAll();
  res.render("home", {
    registerdHomes: registerdHomes,
    pageTitle: "Airbnb Home Page",
  });
};

exports.get404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "404" });
};
