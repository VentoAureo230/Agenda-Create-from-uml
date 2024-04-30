const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');
const middleware = require('../middleware');

router.post('/', middleware.authenticateToken, agendaController.createAgenda);
router.get('/', middleware.authenticateToken, agendaController.getAgendas);

module.exports = router;