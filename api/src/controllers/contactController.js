const User = require('../models/user');
const Agenda = require('../models/agenda');
const Contact = require('../models/contact');



exports.createContact = async (req, res) => {
    const { agendaId, name, email, phone, website, address } = req.body;

    try {
        const agenda = await Agenda.findByPk(agendaId);

        if (!agenda) {
            return res.status(404).send({ message: 'Agenda not found' });
        }

        const newContact = await Contact.create({
            name,
            email,
            phone,
            website,
            address,
            agendaId: agenda.id
        });

        return res.status(201).send(newContact);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        return res.status(200).send(contacts);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}