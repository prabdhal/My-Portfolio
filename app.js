require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to Database
app.listen(3000);

// Register View Engine
app.set('view engine', 'ejs');

// Middleware & Static Files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.render('index');
});

app.get('/download', (req, res) => {
  
  const file = `${__dirname}/upload/PrabdeepDhaliwalsResume.DOCX`;
  res.download(file);
});