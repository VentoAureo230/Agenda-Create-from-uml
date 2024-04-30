const User = require('../models/user');
const Agenda = require('../models/agenda');
const Contact = require('../models/contact');



exports.createContact = async (req, res) => {
    const { agendaId, name, reqEmail, reqPhone, reqWebsite, reqAddress } = req.body;

    let address;
    let website;
    let email;
    let phone;
    try {
        const agenda = await Agenda.findByPk(agendaId);

        if (!agenda) {
            return res.status(404).send({message: 'Agenda not found'});
        }

        if (new Address(reqAddress).validate()) {
            address = reqAddress
        }
        if (new Phone(reqPhone).validate()) {
            phone = reqPhone
        }
        if (new Email(reqEmail).validate()) {
            email = reqEmail
        }
        if (new Website(reqWebsite).validate()) {
            website = reqWebsite
        }

        const newContact = await Contact.create({
            name,
            email: email ? {email} : null,
            phone: phone ? {phone} : null,
            website: website ? {website} : null,
            address: address ? {address} : null,
            agendaId: agenda.id
        });

        return res.status(201).send(newContact);
    } catch (error) {
        return res.status(500).send({message: error.message});
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