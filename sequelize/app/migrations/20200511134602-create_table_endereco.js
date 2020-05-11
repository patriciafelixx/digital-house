'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('endereco', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     }, 
     endereco: Sequelize.STRING(200),
     numero: Sequelize.INTEGER,
     complemento: {
       type: Sequelize.STRING,
       allowNull: true
     },
     uf: Sequelize.STRING(2),
     fk_usuario: {
       type: Sequelize.INTEGER,
       reference: {
         model: {
           tableName: 'usuario'
         },
         key: 'id_usuario'
       }
     }

    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
      */
     return queryInterface.dropTable('endereco');
  }
};
