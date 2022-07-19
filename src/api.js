const express = require('express');

// ...

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', middlewares.validadeBody.isLoginValid, controllers.login.logIn);
app.post('/user', middlewares.validadeUser, controllers.user.create);
app.get('/user', middlewares.auth, controllers.user.getAll);
app.get('/user/:id', middlewares.auth, controllers.user.getById);

app.post('/categories',
  middlewares.auth,
  middlewares.validadeBody.isCategoryValid,
  controllers.category.create);

app.use(middlewares.error);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
