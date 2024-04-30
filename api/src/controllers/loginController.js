const {hashPassword} = require("../utils");
const User = require("../models/user");
const {sign} = require("jsonwebtoken");
require('dotenv').config();

exports.loginUser = async (req, res) => {
    const {login, password} = req.body;
    console.log(process.env.JWT_SECRET)
    try {
        const user = await User.findOne(
            {
                where: {
                    login: login
                }
            }
        );
        if (!user) {
            return res.status(401).json({error: 'Utilisateur non trouvé'});
        } else if (user.password !== hashPassword(password)) {
            return res.status(401).json({error: 'Mot de passe incorrect'});
        } else {
            sign({
                userId: user.userId,
                login: user.login,
                email: user.email
            }, process.env.JWT_SECRET, (err, token) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({message: 'Erreur inconnue'});
                } else {
                    res.json({token: token});
                }
            });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500);
    }
}