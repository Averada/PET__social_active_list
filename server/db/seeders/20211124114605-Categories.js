'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Действуй',
        },
        {
          title: 'Живи',
        },
        {
          title: 'Влияй',
        },
        {
          title: 'Люби',
        },
        {
          title: 'Чувствуй',
        },
        {
          title: 'Богатей',
        },
        {
          title: 'Развивайся',
        },
        {
          title: 'Разное',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
