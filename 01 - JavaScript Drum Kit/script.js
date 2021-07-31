window.addEventListener('keydown', playSound);

/* transitionend = css-transition timer finished. Works with animations too. */
const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio || !key) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName != 'transform') return;

  this.classList.remove('playing');
}

/* window.addEventListener('keyup', (e) => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove('playing');
}); */
