const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const middleware = require('../middleware');

router.post('/', middleware.authenticateToken, contactController.createContact);
router.get('/', middleware.authenticateToken, contactController.getContacts);

module.exports = router;