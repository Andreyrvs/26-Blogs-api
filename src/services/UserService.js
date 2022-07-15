const { user } = require('../database/models');

const createLogin = async ({ email, password }) => {
  const result = await user.findAll({
    where: { email, password },
    });

  if (!result || result.length === 0) return null;

  return result;
};

module.exports = {
  createLogin,
};