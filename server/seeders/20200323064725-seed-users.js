'use strict';
const fs = require('fs')
const { hashPass } = require('./../helper/bcrypt')
const users = JSON.parse(fs.readFileSync('./user.json','utf-8'))
users.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
  el.password = hashPass(el.password)
});
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', users, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
