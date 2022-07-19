const loginService = require('../services/loginService');

const isLoginValid = async (req, __res, next) => {
  const { email, password } = req.body;
  if (email.length === 0 || password.length === 0) {
    const err = new Error('Some required fields are missing');
    err.statusCode = 400;

    return next(err);
  } 

  const result = await loginService.getLogin(email, password);
  if (!result) {
    const err = new Error('Invalid fields');
    err.statusCode = 400;
  
    return next(err);
  }
  return next();
};

const isCategoryValid = async (req, __res, next) => {
  const { name } = req.body;
  if (!name) {
    const err = new Error('"name" is required');
  
    err.statusCode = 400;
  
    return next(err);
  }
  return next();
};

module.exports = {
  isLoginValid,
  isCategoryValid,
};
