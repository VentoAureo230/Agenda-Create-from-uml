const {User, Contact, Agenda} = require("../models");
const {hashPassword} = require("../utils");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [
            {login: 'clarence', password: hashPassword('clarence'), email: 'clarence@seedorf'},
            {login: 'clarence2', password: hashPassword('clarence2'), email: 'contact@gmail.com'}], {});
        await queryInterface.bulkInsert('Agendas', [
            {name: 'Agenda 1', userId: 1},
            {name: 'Agenda 2', userId: 2}], {});
        const agenda = await Agenda.create({
            name: 'Agenda 3',
            userId: 1
    }, {});
        await queryInterface.bulkInsert('Contacts', [
            {
                agendaId: agenda.dataValues.id,
                name: 'Contact 3',
            },
            {
                agendaId:  agenda.dataValues.id,
                name: 'Contact 4',
            }], {});

    },
    down: async (queryInterface, Sequelize) => {
        await User.destroy({where: {}});
        await Contact.destroy({where: {}});
        await Agenda.destroy({where: {}});
    }
};