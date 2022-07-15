const express = require('express');

// ...

const UserController = require('./controllers/UserController');

const app = express();

app.use(express.json());

app.get('/login', UserController.getLogin);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
