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
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.JSON,
        allowNull: true
    },
    website: {
        type: DataTypes.JSON,
        allowNull: true
    },
    address: {
        type: DataTypes.JSON,
        allowNull: true
    },
});

module.exports = Contact;