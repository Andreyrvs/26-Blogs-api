const error = require('./error');
const auth = require('./auth');
const validadeBody = require('./validateBody');
const validadeUser = require('./validateUser');

module.exports = {
  auth,
  error,
  validadeBody,
  validadeUser,
};
