const express = require('express');
const router = require('../routes');

module.exports = () => {
    const app = express();

    app.set('port', 3000);
    app.use(express.json());
    router(app);

    return(app);
}
