const { User } = require('../database/models');

const user = async ({ displayName, email, password, image }) => {
  const result = await User.create({ displayName, email, password, image });

  return result;
};

module.exports = {
  user,
};