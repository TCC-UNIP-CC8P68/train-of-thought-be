const controllerCapture = require('./controllers/captures');
const controllerConfiguration = require('./controllers/configurations');
const controllerConfigurationTimeout = require('./controllers/configurationsTimeout');
const controllerConfigurationAllowCapture = require('./controllers/configurationsAllowCapture');
const controllerUrlException = require('./controllers/urlExceptions');
const controllerUser = require('./controllers/users');
const controllerTopSites = require('./controllers/topSites');
const controllerWordCloud = require('./controllers/wordCloud');

module.exports = (app) => {
  app.route('/capture')
  .post(controllerCapture.postCapture)
  .get(controllerCapture.getCapture);

  app.route('/configuration')
  .post(controllerConfiguration.postConfiguration)
  .put(controllerConfiguration.putConfiguration)
  .get(controllerConfiguration.getConfiguration)
  
  app.route('/configuration/dontdisturb')
    .put(controllerConfiguration.putDontDisturb);

  app.route('/configuration/timeout')
  .put(controllerConfigurationTimeout.putConfigurationTimeout);

  app.route('/configuration/allowcapture')
  .put(controllerConfigurationAllowCapture.putConfigurationAllowCapture);

  app.route('/urlexception')
  .post(controllerUrlException.postUrlException)
  .get(controllerUrlException.getUrlException);

  app.route('/user')
  .post(controllerUser.postUser)
  .get(controllerUser.getUser);

  app.route('/topsites')
  .get(controllerTopSites.getTopSites);

  app.route('/wordcloud')
    .get(controllerWordCloud.getWordCloud)
}
