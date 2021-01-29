if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const router = require('express').Router();
const Comment = require('../models/comment');
const Reply = require('../models/reply');

router.get('/', async (req, res) => {
  res.render('tdgame');
});

router.post('/comment', async (req, res) => {
  const { pageId, user, comment } = req.body;

  const comment = new Comment({
    pageId: 'TD3D',
    user: req.user.displayName,
    comment,
  });

  const saveComment = await comment.save();
  if (saveComment) console.log('Comment Saved!');
  else console.log(err);
});

router.put('/:id', async (req, res) => {
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
