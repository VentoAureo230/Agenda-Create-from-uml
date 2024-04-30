const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

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
}, {
    // Other model options go here
});

module.exports = Contact;