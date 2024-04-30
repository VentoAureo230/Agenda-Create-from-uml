const express = require('express');
const userRoutes = require('./routes/userRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the router for all routes starting with /users
app.use('/users', userRoutes);
app.use('/agenda', agendaRoutes);
app.use('/contact', contactRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));