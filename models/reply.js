const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  blogRef: {
    type: String,
    required: true,
  },
  commentRef: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  replyComment: {
    type: String,
    required: true,
  },
  usersLiked: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
