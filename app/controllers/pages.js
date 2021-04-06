const isLoggedIn = require("./helpers/is_logged_in");
const locations = require('../models/locations');

module.exports = setupPages;

function setupPages(app) {
  // show the home page (will also have our login links)
  app.get("/", (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect("/home");
    } else {
      res.render("index.ejs");
    }
  });

  app.get("/home", isLoggedIn, (req, res) => {
    res.render("home.ejs");
  });

  app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

  app.get("/how-to-play", isLoggedIn, (req, res) => {
    res.render("how-to-play.ejs");
  });

  app.get("/resources", (req, res) => {
    res.render("resources.ejs");
  });

  app.get("/more-games", isLoggedIn, (req, res) => {
    res.render("more-games.ejs");
  });

  app.get("/user-profile", isLoggedIn, (req, res) => {
    res.render("user-profile.ejs", { user: req.user });
  });

  app.get("/map", isLoggedIn, (req, res) => {
    res.render("map.ejs", { visitedLocations: req.user.visitedLocations } );
  });

  app.get("/locations/:locationName", isLoggedIn, (req, res) => {
    res.render("location.ejs", { location: locations[req.params.locationName] });
  });

}
