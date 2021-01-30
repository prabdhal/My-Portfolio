if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const router = require('express').Router();
const Comment = require('../models/comment');
const Reply = require('../models/reply');
const User = require('../models/user');

router.get('/', async (req, res) => {
  const allComments = await Comment.find();
  const allReplies = await Reply.find();

  let comments = [];
  let replies = [];

  for (i = 0; i < allComments.length; i++) {
    if (allComments[i].pageId == 'TD3D') {
      comments.push(allComments[i]);
    }
  }
  for (i = 0; i < allReplies.length; i++) {
    if (allReplies[i].pageId == 'TD3D') {
      replies.push(allReplies[i]);
    }
  }
  res.render('tdgame', { comments, replies, user: req.user });
});

router.post('/comment', async (req, res) => {
  const { pageId, user, comment } = req.body;

  const userComment = new Comment({
    pageId: 'TD3D',
    user: req.user.displayName,
    comment,
  });

  const saveComment = await userComment.save();
  if (saveComment) console.log('Comment Saved!');
  else console.log(err);
});

router.put('/comment/:id', async (req, res) => {
  const { comment } = req.body;

  const userComment = await Comment.findById(req.params.id);

  userComment.comment = comment;

  const saveComment = await comment.save();
  if (saveComment) console.log('Comment Saved!');
  else console.log(err);
  res.redirect('/tower-defence-3d-enemy-wave');
});

router.delete('/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  await Reply.deleteMany({ commentRef: comment._id });
  await Comment.deleteOne(comment);

  res.redirect('/tower-defence-3d-enemy-wave');
});

module.exports = router;
