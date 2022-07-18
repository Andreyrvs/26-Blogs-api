const { User } = require('../database/models');

const login = async (userEmail) => {
  const result = await User.findOne({
    where: { email: userEmail },
  });

  if (!result) return null;

  return result;
};

module.exports = {
  login,
};