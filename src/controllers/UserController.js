const UserService = require('../services/UserService');

const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const result = await UserService.getLogin({ email, password });

    if (!result) return null;

    return res.send('Foi');
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getLogin,
};