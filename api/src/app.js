const express = require('express');
const agendaRoutes = require('./routes/agendaRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const Contact = require('./models/contact');
const {sequelize} = require("./models");
const loginRoutes = require('./routes/loginRoutes');
const seedUp = require('./seeders/clarenceSeeder').up;
const seedDown = require('./seeders/clarenceSeeder').down;
const cors = require('cors');

sequelize.sync({ force: true })
    .then(async () => {
        await seedDown(sequelize.getQueryInterface());
        seedUp(sequelize.getQueryInterface());
    })
    .catch(error => console.log('This error occurred', error));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/login', loginRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/agendas', agendaRoutes);
app.use('/api/v1/contacts', contactRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));