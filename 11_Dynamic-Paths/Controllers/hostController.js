const Home = require("../Models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-Home", { pageTitle: "Home Details" });
};

exports.getEditHome = (req, res, next) => {
  // const homeId = req.params.homeId;
  res.render("host/edit-Home", { pageTitle: "Edit Home" });
};

exports.getHostHome = (req, res, next) => {
  Home.fetchAll((registerdHomes) => {
    res.render("host/host-homelist", {
      registerdHomes: registerdHomes,
      pageTitle: "Host HomeList",
    });
  });
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
  //console.log("Home Details : ", homeObj);
  res.render("host/home-Added", { pageTitle: "Home Added Successfully" });
};
