const controllerCapture = require('./controllers/captures');
const controllerConfiguration = require('./controllers/configurations');
const controllerUser = require('./controllers/users');

module.exports = (app) => {
  app.route('/capture')
  .post(controllerCapture.postCapture)
  .get(controllerCapture.getCapture);

  app.route('/configuration')
  .post(controllerConfiguration.postConfiguration);

  app.route('/user')
  .post(controllerUser.postUser);
}
