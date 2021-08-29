/* Get our elements */
/* Master player-div */
const player = document.querySelector('.player');
/* Video */
const video = player.querySelector('.viewer');
/* Progress */
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
/* controls */
const togglePlayButton = player.querySelector('button.toggle');

const skipButtons = player.querySelectorAll('button[data-skip]');
const fullscreenButton = player.querySelector('button.fullscreen');
const ranges = player.querySelectorAll('input.player__slider');

const pauseCode = '&#9208;';
const playCode = '&#9205;';

/* Functions */
function togglePlay() {
  /* play or pause the video */
  video.paused ? video.play() : video.pause();

  /* variant
  const method = video.paused ? 'play' : 'pause'; 
  video[method](); */
}

function updateButton() {
  video.paused
    ? (togglePlayButton.innerHTML = playCode)
    : (togglePlayButton.innerHTML = pauseCode);
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
let mouseDown = false;
function scrub(e) {
  //e.offset is in relation to the progress bar because its position relative
  let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
function toggleFullscreen() {
  video.requestFullscreen();
}
/* Hook up the event listeners */

togglePlayButton.addEventListener('click', togglePlay);
fullscreenButton.addEventListener('click', toggleFullscreen);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((button) => {
  button.addEventListener('click', skip);
});

ranges.forEach((range) => {
  range.addEventListener('change', handleRangeUpdate);
});

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e)); //if mousedown is true, it moves on.
progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));
