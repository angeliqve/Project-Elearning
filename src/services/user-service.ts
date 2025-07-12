const userData = require('../data/users');

exports.getUsers = () => {
  return userData || [];
};
