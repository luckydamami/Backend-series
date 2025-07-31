const Home = require("../Models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-Home", { pageTitle: "Home Details", editing: false });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      return res.redirect("/host/host-homelist");
    }
    // console.log(homeId, editing, home);
    res.render("host/edit-Home", {
      pageTitle: "Edit Your Home",
      editing: editing,
      home: home,
    });
  });
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
  homeObj.save();
  //console.log("Home Details : ", homeObj);
  res.redirect("/host-homelist");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, location, rooms, price, ratings, photoUrl } = req.body;
  const objHome = new Home(
    houseName,
    location,
    rooms,
    price,
    ratings,
    photoUrl
  );
  objHome.id = id;
  objHome.save();
  res.redirect("/host-homelist");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("came form delete button : ", homeId);
  Home.deleteById(homeId, (err) => {
    if (err) {
      console.log("Home is not Deleted!");
    }
    res.redirect("/host-homelist");
  });
};
