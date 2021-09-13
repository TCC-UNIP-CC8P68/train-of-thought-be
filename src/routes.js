const controllerCapture = require('./controllers/captures');
const controllerConfiguration = require('./controllers/configurations');
const controllerConfigurationTimeout = require('./controllers/configurationsTimeout');
const controllerConfigurationAllowCapture = require('./controllers/configurationsAllowCapture');
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

  app.route('/configuration/timeout')
  .post(controllerConfigurationTimeout.postConfigurationTimeout)
  .put(controllerConfigurationTimeout.putConfigurationTimeout);

  app.route('/configuration/allowcapture')
  .post(controllerConfigurationAllowCapture.postConfigurationAllowCapture)
  .put(controllerConfigurationAllowCapture.putConfigurationAllowCapture);

  app.route('/urlexception')
  .post(controllerUrlException.postUrlException)
  .get(controllerUrlException.getUrlException);

  app.route('/verifyurlexception')
  .get(controllerUrlException.verifyUrlException);

  app.route('/user')
  .post(controllerUser.postUser)
  .get(controllerUser.getUser);
}
