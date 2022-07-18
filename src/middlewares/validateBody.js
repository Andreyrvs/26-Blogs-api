const loginService = require('../services/loginService');

module.exports = async (req, _res, next) => {
  const { email, password } = req.body;
  if (email.length === 0 || password.length === 0) {
    const err = new Error('Some required fields are missing');
    err.statusCode = 400;

    return next(err);
  } 

  const result = await loginService.login(email);
  if (!result) {
    const err = new Error('Invalid fields');
    err.statusCode = 400;
  
    throw next(err);
  }
  return next();
};
