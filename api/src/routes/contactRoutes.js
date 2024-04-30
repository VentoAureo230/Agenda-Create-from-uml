const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);

module.exports = router;