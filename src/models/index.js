const sequelize = require('../sequelize.js');
const User = require('./user.js');
const Agenda = require('./agenda.js');

User.hasMany(Agenda, {
    foreignKey: 'userId',
    as: 'agendas'
});

Agenda.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

module.exports = {
    sequelize,
    User,
    Agenda,
};