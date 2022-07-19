const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, _next) => {
  try {
    const payload = {
      displayName: req.body.displayName,
      email: req.body.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '14min',
      algorithm: 'HS256',
    });

    return res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
  
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};