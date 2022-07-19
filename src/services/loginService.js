const { User } = require('../database/models');

const getLogin = async (email, password) => {
  const result = await User.findOne({
    where: { email, password },
  });

  return result;
};

module.exports = {
  getLogin,

};