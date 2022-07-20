const Sequelize = require('sequelize');
const config = require('../database/config/config');
const categoryService = require('../services/categoryService');
const blogPostService = require('../services/blogPostService');

const sequelize = new Sequelize(config.development);

const create = async (req, res, __next) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const post = await blogPostService.bulkCreate({

      }, { transaction: t });
      
      await categoryService.create({
        
      }, { transaction: t });
    res.staus(201).json(result);
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
};