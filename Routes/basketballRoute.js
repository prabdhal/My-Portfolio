if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const router = require("express").Router();

router.get("/basketballapp", async (req, res) => {
  res.render("basketballapp");
});

module.exports = router;
