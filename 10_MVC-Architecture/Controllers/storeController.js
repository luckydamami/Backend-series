const Home = require("../Models/Models_home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registerdHomes) => {
    res.render("store/Index", {
      registerdHomes: registerdHomes,
      pageTitle: "Airbnb Index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registerdHomes) => {
    res.render("store/home-list", {
      registerdHomes: registerdHomes,
      pageTitle: "Airbnb Home Page",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
  });
};

exports.getFavrouiteList = (req, res, next) => {
  Home.fetchAll((registerdHomes) => {
    res.render("store/favrouite-list", {
      registerdHomes: registerdHomes,
      pageTitle: "Home Favrouite List",
    });
  });
};
