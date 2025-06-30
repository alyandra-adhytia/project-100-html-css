let startTime = 0;
let elapsed = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function update() {
  elapsed = Date.now() - startTime;
  display.textContent = formatTime(elapsed);
}

startBtn.addEventListener('click', () => {
  startTime = Date.now() - elapsed;
  timerInterval = setInterval(update, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsed = 0;
  display.textContent = '00:00:00';
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
});
