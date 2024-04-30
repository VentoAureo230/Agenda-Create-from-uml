const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('agendaDB', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5454,
});
module.exports = sequelize;