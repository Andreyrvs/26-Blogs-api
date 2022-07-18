const { User } = require('../database/models');

const login = async (userEmail) => {
  const result = await User.findOne({
    where: { email: userEmail },
  });

  return result;
};

module.exports = {
  login,
};