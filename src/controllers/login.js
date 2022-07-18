const jwt = require('jsonwebtoken');
// const loginService = require('../services/loginService');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const { error,
      //  email, password 
      } = req.body;

    // const result = await loginService.login(email);

    if (error) return next(error);

    const payload = {
      email: req.body.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '14min',
      algorithm: 'HS256',
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
  
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};