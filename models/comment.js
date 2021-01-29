const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  pageId: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  usersLiked: {
    type: Array,
  },
  replies: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
