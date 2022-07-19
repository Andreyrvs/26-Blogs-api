const userService = require('../services/userService');

module.exports = async (_req, res, _next) => {
  try {
    const getUser = await userService.getAll();
    console.log(getUser);
    if (!getUser) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    return res.status(200).json(getUser);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
};