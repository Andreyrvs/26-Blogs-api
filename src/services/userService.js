const { User } = require('../database/models');

const getAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  console.log(result);
  return result;
};

const user = async ({ displayName, email, password, image }) => {
  const result = await User.create({ displayName, email, password, image });

  return result;
};

module.exports = {
  user,
  getAll,
};