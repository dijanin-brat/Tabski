'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      title: 'Post1',
      content: 'aaaaaaaaaaaa',
      authorId: 1,
    },
    {
      title: 'Post2',
      content: 'bbbbbbbbbb',
      authorId: 1,
    },
    {
      title: 'Post3',
      content: 'cccccccccc',
      authorId: 2,
    },
    {
      title: 'Post4',
      content: 'dddddddddd',
      authorId: 3,
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};