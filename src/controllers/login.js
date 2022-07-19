const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const logIn = async (req, res, next) => {
  try {
    const { error } = req.body;

    if (error) return next(error);

    const payload = {
      email: req.body.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '15m',
      algorithm: 'HS256',
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
  
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  logIn,
};