const express = require('express');

// ...

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', middlewares.validadeBody, controllers.login.logIn);
app.post('/user', middlewares.validadeUser, controllers.user.create);
app.get('/user', middlewares.auth, controllers.user.getAll);
app.get('/user/:id', middlewares.auth, controllers.user.getById);
app.use(middlewares.error);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
