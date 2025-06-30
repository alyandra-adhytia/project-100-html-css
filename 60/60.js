function playSound(e) {
  const key = e.type === 'keydown'
    ? e.keyCode
    : this.dataset.key;

  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const keyDiv = document.querySelector(`.drum[data-key="${key}"]`);
  if (!audio) return;

  audio.currentTime = 0; // restart
  audio.play();

  keyDiv.classList.add('active');
  setTimeout(() => keyDiv.classList.remove('active'), 100);
}

// Event klik & keyboard
document.querySelectorAll('.drum').forEach(drum => {
  drum.addEventListener('click', playSound);
});
window.addEventListener('keydown', playSound);
