const controllerCapture = require('./controllers/captures');
const controllerConfiguration = require('./controllers/configurations');
const controllerUrlException = require('./controllers/urlExceptions');
const controllerUser = require('./controllers/users');

module.exports = (app) => {
  app.route('/capture')
  .post(controllerCapture.postCapture)
  .get(controllerCapture.getCapture);

  app.route('/configuration')
  .post(controllerConfiguration.postConfiguration)
  .put(controllerConfiguration.putConfiguration)
  .get(controllerConfiguration.getConfiguration);

  app.route('/urlexception')
  .post(controllerUrlException.postUrlException)
  .get(controllerUrlException.getUrlException);

  app.route('/verifyurlexception')
  .get(controllerUrlException.verifyUrlException);

  app.route('/user')
  .post(controllerUser.postUser)
  .get(controllerUser.getUser);
}
