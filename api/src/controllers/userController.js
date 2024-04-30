const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret');

        return res.status(200).send({ token });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};