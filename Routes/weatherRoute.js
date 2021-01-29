if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const router = require('express').Router();
const axios = require('axios');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const API_BASE_URL = process.env.API_BASE_URL;

router.post('/', (req, res) => {
  const url = `${API_BASE_URL}weather?lat=${req.body.latitude}&lon=${req.body.longitude}&units=metric&appid=${WEATHER_API_KEY}`;
  axios({
    url: url,
    responseType: 'json',
  })
    .then((data) => res.json(data.data))
    .catch((err) => {
      console.log(err);
    });
});

router.get('/', (req, res) => {
  res.render('weatherapp');
});

module.exports = router;
