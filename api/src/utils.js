const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {
    hashPassword(password) {
        return bcrypt.hashSync(password, process.env.SALT);
    },
}