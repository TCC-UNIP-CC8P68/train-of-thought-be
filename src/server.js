const app = require('./config/express')();
const sequelize = require('./util/database.js');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.listen(app.get('port'), () => {
  console.log('Server running on http://localhost:' + app.get('port'));
});
