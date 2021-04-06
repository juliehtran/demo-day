module.exports = setupAuthentication;

function setupAuthentication(app, passport) {
  // LOGOUT ==============================
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // LOGIN ===============================
  // show the login form
  app.get("/sign-in", (req, res) => {
    res.render("sign-in.ejs", { message: req.flash("loginMessage") });
  });

  // process the login form
  app.post(
    "/sign-in",
    passport.authenticate("local-login", {
      successRedirect: "/home", // redirect to the secure profile section
      failureRedirect: "/sign-in", // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );

  // SIGNUP =================================
  // show the signup form
  app.get("/register", (req, res) => {
    res.render("register.ejs", { message: req.flash("registerMessage") });
  });

  // process the signup form
  app.post(
    "/register",
    passport.authenticate("local-register", {
      successRedirect: "/home", // redirect to the secure profile section
      failureRedirect: "/register", // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );
}
