const app = require('./config/express')();

const { Umzug, SequelizeStorage } = require('umzug');

const db = require('./util/database');

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  context: db.getQueryInterface(),   
  logger: console,
});

(async () => {
  // Checks migrations and run them if they are not already applied. To keep
  // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  await umzug.up();
})();

app.listen(app.get('port'), () => {
  console.log('Server running on http://localhost:' + app.get('port'));
});    
