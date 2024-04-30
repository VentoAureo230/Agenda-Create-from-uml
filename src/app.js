const express = require('express');
const userRoutes = require('./routes/userRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const contactRoutes = require('./routes/contactRoutes');
const Contact = require('./models/contact');
const {sequelize} = require("./models");


sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch(error => console.log('This error occurred', error));

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the router for all routes starting with /users
//app.use('/users', userRoutes);
//app.use('/agenda', agendaRoutes);
//app.use('/contact', contactRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));