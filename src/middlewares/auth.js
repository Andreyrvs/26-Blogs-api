const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    const err = new Error('Token não encontrado');
    err.statusCode = 401;

    return next(err);
  }

  try {
    const payload = jwt.verify(authorization, JWT_SECRET);
    req.user = payload;

    return next();
  } catch (error) {
    error.statusCode = 401;
    return next(error);
  }
};