const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;
mongoose.set('strictQuery', true);
mongoose.connect(mongoString, {
    authSource: "admin"
});
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error);
});
database.once('connected', () => {
    console.log('Database Connected');
});

const app = express();
app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});