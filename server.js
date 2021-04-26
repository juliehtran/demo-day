// server.js

// set up ======================================================================
// get all the tools we need
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const passport = require('passport');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash')

const configDB = require('./config/database');
const setupRoutes = require('./app/routes')

// configuration ===============================================================
mongoose.connect(configDB.url, { useNewUrlParser: true, useUnifiedTopology: true })
require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(express.json({ extended: true })); // get information from html forms
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
  secret: process.env.SECRET || 'aliens112', // session secret
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use(flash()); // use connect-flash for flash messages stored in session
setupRoutes(app, passport);


// launch ======================================================================
app.listen(port);
console.log('Listening on ' + port);
