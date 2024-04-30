const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');

const Agenda = sequelize.define('Agenda', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Agenda;