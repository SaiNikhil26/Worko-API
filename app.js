const express = require("express");
const { connectDB } = require('./config/dbConfig');
const userRoutes = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to parse form data

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', userRoutes);
connectDB();

module.exports = app;
