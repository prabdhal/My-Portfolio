if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const router = require('express').Router();


router.get('/game', async (req, res) => {
  res.render('tdgame');
});

module.exports = router;