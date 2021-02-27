const gameScreen = document.querySelector('.game-screen');

setInterval(AdjustGameScreenSize, 2000);

function AdjustGameScreenSize() {
  let height = gameScreen.offsetWidth / 1.6;
  console.log(height);
  gameScreen.style.height = height + 'px';
}
