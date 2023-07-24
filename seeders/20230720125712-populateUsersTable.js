'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Test Test',
      email: 'test@test.com',
      password: 'test123',
    },
    {
      name: 'Petar Petrovic',
      email: 'petar@petrovic.com',
      password: 'petar123',
    },
    {
      name: 'Djordje Djordjevic',
      email: 'djordje@djordjevic.com',
      password: 'djordje123',
    },
    {
      name: 'Aleksa Aleksic',
      email: 'aleksa@aleksic.com',
      password: 'aleksa123',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};