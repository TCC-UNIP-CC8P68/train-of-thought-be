const controller = require('./controllers/captures');

module.exports = (app) => {
    app.post('/captures', controller.captures);
}
