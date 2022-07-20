const { BlogPost } = require('../database/models');

const create = async () => {
  const result = await BlogPost.findAll();

  return result;
};

module.exports = {
  create,
};