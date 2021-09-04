const express = require('express');
const cors = require('cors');
const router = require('../routes');

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.set('port', 8085);

  router(app);

  return(app);
}
