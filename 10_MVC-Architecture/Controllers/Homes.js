exports.getAddHome = (req, res, next) => {
  console.log(req.body);
  res.render("addHome", { pageTitle: "Home Details" });
};

exports.postAddHome = (req, res, next) => {
  registerdHomes.push(req.body);
  console.log("Home Details : ", registerdHomes);
  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
};

exports.getHome = (req, res, next) => {
  res.render("home", {
    registerdHomes: registerdHomes,
    pageTitle: "Airbnb Home Page",
  });
};

exports.get404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "404" });
};
