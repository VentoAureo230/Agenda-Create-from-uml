const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {
    hashPassword(password) {
        return bcrypt.hashSync(password, '$2b$10$9qmjCDU3.FxJyG3WmCk8Fu');
    },
}