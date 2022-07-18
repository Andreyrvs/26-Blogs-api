const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const { JWT_SECRET } = process.env;

const validadeBody = async ({ email, password }, next) => {
  if (email.length === 0 || password.length === 0) {
    const err = new Error('Some required fields are missing');
    err.statusCode = 400;

    return next(err);
  }

  return { email, password };
};

const validateEmail = async (email, next) => {
  const result = await loginService.login(email);

  if (!result) {
    const err = new Error('Invalid fields');
    err.statusCode = 400;
  
    return next(err);
  }
  return result;
};

module.exports = async (req, res, next) => {
  try {
    const { error, email, password } = req.body;
  
    validadeBody({ email, password }, next);
    validateEmail(email, next);
    
    if (error) return next(error);

    const payload = {
      email: req.body.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '14min',
      algorithm: 'HS256',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
  
    res.status(500).json({ message: 'Algo deu errado' });
  }
};