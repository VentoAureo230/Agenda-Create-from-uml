const User = require('../models/user');
const Agenda = require('../models/agenda');

exports.createAgenda = async (req, res) => {
    const { userId, name } = req.body;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const newAgenda = await Agenda.create({
            name,
            userId: user.id
        });

        return res.status(201).send(newAgenda);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

exports.getAgendas = async (req, res) => {
    try {
        const agendas = await Agenda.findAll();

        return res.status(200).send(agendas);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};