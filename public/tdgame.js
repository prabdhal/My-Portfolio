const gameScreen = document.querySelector('.game-screen');
const replyButton = document.querySelector('.reply-anchor-btn');
const replyCommentBox = document.querySelector(
  '[data-reply-comment-box-display]'
);

setInterval(AdjustGameScreenSize, 2000);

function AdjustGameScreenSize() {
  let height = gameScreen.offsetWidth / 1.6;
  console.log(height);
  gameScreen.style.height = height + 'px';
}
