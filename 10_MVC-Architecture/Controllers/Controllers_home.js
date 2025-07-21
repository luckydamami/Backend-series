const Home = require("../Models/Models_home");

exports.getAddHome = (req, res, next) => {
  console.log(req.body);
  res.render("host/addHome", { pageTitle: "Home Details" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, location, rooms, price, ratings, photoUrl } = req.body;
  const homeObj = new Home(
    houseName,
    location,
    rooms,
    price,
    ratings,
    photoUrl
  );
  homeObj.save(); //register the home object
  console.log("Home Details : ", homeObj);
  res.render("host/homeAdded", { pageTitle: "Home Added Successfully" });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registerdHomes) => {
    res.render("store/home-list", {
      registerdHomes: registerdHomes,
      pageTitle: "Airbnb Home Page",
    });
  });
};

exports.get404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "404" });
};
