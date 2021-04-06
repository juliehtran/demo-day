const setupAuthentication = require('./controllers/authentication');
const setupPages = require('./controllers/pages');
const setupApi = require('./controllers/api');

module.exports = setupRoutes;

function setupRoutes(app, passport) {
  setupAuthentication(app, passport);
  setupPages(app);
  setupApi(app);
}
