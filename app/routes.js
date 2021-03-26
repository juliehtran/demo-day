const User = require('./models/user')

module.exports = setupRoutes;

function setupRoutes(app, passport) {

  // normal routes ===============================================================

  // show the home page (will also have our login links)
  app.get('/', (req, res) => {
    res.render('index.ejs');
  });

  app.get('/home', isLoggedIn, (req, res) => {
    res.render('home.ejs')
  })
  
  // LOGOUT ==============================
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================

  // locally --------------------------------
  // LOGIN ===============================
  // show the login form
  app.get('/sign-in', (req, res) => {
    res.render('sign-in.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  app.post('/sign-in', passport.authenticate('local-login', {
    successRedirect: '/home', // redirect to the secure profile section
    failureRedirect: '/sign-in', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // SIGNUP =================================
  // show the signup form
  app.get('/register', (req, res) => {
    res.render('register.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/home', // redirect to the secure profile section
    failureRedirect: '/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/sign-in');
}
