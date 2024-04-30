const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');
const Contact = sequelize.define('Contact', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}

    },
    phone: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: {}
    },
    website: {
        type: DataTypes.JSON,
        defaultValue: {},
        allowNull: true
    },
    address: {
        type: DataTypes.JSON,
        defaultValue: {},
        allowNull: true
    },
}, {
    timestamps: false
});

module.exports = Contact;