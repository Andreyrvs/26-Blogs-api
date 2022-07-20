const express = require('express');

// ...

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', middlewares.body.isLoginValid, controllers.login.logIn);
app.post('/user', middlewares.user.validateUser, controllers.user.create);
app.get('/user', middlewares.auth, controllers.user.getAll);
app.get('/user/:id', middlewares.auth, controllers.user.getById);

app.post('/categories',
  middlewares.auth,
  middlewares.body.isCategoryValid,
  controllers.category.create);
app.get('/categories', middlewares.auth, controllers.category.getAll);

app.post('/post', middlewares.auth, controllers.blogPost.create);

app.use(middlewares.error);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
