const controller = require('./controllers/captures');

module.exports = (app) => {
  app.route('/capture')
  .post(controller.postCapture)
  .get(controller.getCapture);
}
