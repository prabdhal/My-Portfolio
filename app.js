if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const weatherRoute = require('./Routes/weatherRoute');
const gameRoute = require('./Routes/gameRoute');
const todoListRoute = require('./Routes/todolistRoute');
const basketballRoute = require('./Routes/basketballRoute');

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

// Connect to Database
app.listen(3000);

// Register View Engine
app.set('view engine', 'ejs');

// Middleware & Static Files
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.render('index');
});

app.use('/', gameRoute);
app.use('/', weatherRoute);
app.use('/', todoListRoute);
app.use('/', basketballRoute);

app.get('/download', (req, res) => {
  const file = `${__dirname}/upload/PrabdeepDhaliwalsResume.pdf`;
  res.download(file);
});
