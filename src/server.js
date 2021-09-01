const app = require('./config/express')();
const sequelize = require('./util/database.js')
const { Umzug, SequelizeStorage } = require('umzug');

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  context: sequelize.getQueryInterface(), 
  storage: new SequelizeStorage({
    sequelize
  }),  
  logger: console,
});

(async () => {
  await umzug.up();
})();

app.listen(app.get('port'), () => {
  console.log('Server running on http://localhost:' + app.get('port'));
});
