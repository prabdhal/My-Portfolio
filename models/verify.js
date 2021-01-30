const mongoose = require('mongoose');

const verifySchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    expires: 600,
  },
});

const VerifyAccount = mongoose.model('VerifyAccount', verifySchema);

module.exports = VerifyAccount;
