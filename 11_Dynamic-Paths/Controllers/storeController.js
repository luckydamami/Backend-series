const favrouiteClass = require("../Models/favrouite");
const Home = require("../Models/home");

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
  favrouiteClass.getFavourites((allfavrouites) => {
    Home.fetchAll((registerdHomes) => {
      const favHomes = registerdHomes.filter((home) =>
        allfavrouites.includes(home.id)
      );
      res.render("store/favrouite-list", {
        favHomes: favHomes,
        pageTitle: "My Favrouite List",
      });
    });
  });
};

exports.postFavrouiteList = (req, res, next) => {
  favrouiteClass.addFavourites(req.body.id, (err) => {
    if (err) {
      console.log("Error While marking favrouites : ", err);
    }
    res.redirect("/favrouites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      res.redirect("/bookings");
      console.log("Oops!! Home Not Found.");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details",
      });
    }
  });
};

exports.postDeleteFavrouite = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("came form delete button : ", homeId);
  favrouiteClass.deleteById(homeId, (error) => {
    if (error) {
      console.log("Your Home was not Deleted", error);
    }
    res.redirect("/favrouites");
  });
};
