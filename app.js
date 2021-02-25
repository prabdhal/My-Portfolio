if (process.env.NODE_ENV === 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const weatherRoute = require('./Routes/weatherRoute');
const gameRoute = require('./Routes/gameRoute');
const todoListRoute = require('./Routes/todolistRoute');
const basketballRoute = require('./Routes/basketballRoute');
const userRoute = require('./Routes/userRoute');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');
require('./config/passport')(passport);

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

// Listen to Port
const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening to port ${port}...`));

// Register View Engine
app.set('view engine', 'ejs');

// Middleware & Static Files
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.render('index');
});

app.use('/tower-defence-3d-enemy-wave', gameRoute);
app.use('/weather-app', weatherRoute);
app.use('/todo-list-app', todoListRoute);
app.use('/basketball-score-app', basketballRoute);
app.use('/', userRoute);

app.get('/download', (req, res) => {
  const file = `${__dirname}/upload/PrabdeepDhaliwalsResume.pdf`;
  res.download(file);
});
