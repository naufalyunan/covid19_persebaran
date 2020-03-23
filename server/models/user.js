'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },{
    sequelize,
    modelName: 'User'
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Report);
  };
  return User;
};