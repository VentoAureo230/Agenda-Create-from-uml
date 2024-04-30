const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

router.post('/agendas', agendaController.createAgenda);
router.get('/agendas', agendaController.getAgendas);

module.exports = router;