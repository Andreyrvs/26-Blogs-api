const { Category } = require('../database/models');

const create = async ({ name }) => {
  const result = await Category.create({ name });
  console.log(result);
  return result;
};

module.exports = {
  create,
};