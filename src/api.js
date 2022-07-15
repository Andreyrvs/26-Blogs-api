const express = require('express');

// ...

const UserController = require('./controllers/UserController');

const app = express();

app.use(express.json());

app.post('/login', UserController.createLogin);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
