const sequelize = require('../sequelize.js');
const User = require('./user.js');
const Agenda = require('./agenda.js');
const Contact = require('./contact.js');

User.hasMany(Agenda, {
    foreignKey: 'userId',
    as: 'agendas'
});

Agenda.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});
Contact.belongsTo(Agenda, {
    foreignKey: 'agendaId',
    as: 'agenda'
});
Agenda.hasMany(Contact, {
    foreignKey: 'agendaId',
    as: 'contacts'
});

module.exports = {
    sequelize,
    User,
    Agenda,
    Contact,
};