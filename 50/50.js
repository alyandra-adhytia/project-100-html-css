const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let countdown;
const totalSeconds = 9999999999999;
let remaining = totalSeconds;

function updateDisplay(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  timerEl.textContent = `${m}:${s}`;
}

function startTimer() {
  clearInterval(countdown);
  remaining = totalSeconds;
  updateDisplay(remaining);

  countdown = setInterval(() => {
    remaining--;
    updateDisplay(remaining);

    if (remaining <= 0) {
      clearInterval(countdown);
      timerEl.textContent = "Waktu Habis!";
      startBtn.disabled = false;
      resetBtn.disabled = true;
    }
  }, 1000);

  startBtn.disabled = true;
  resetBtn.disabled = false;
}

function resetTimer() {
  clearInterval(countdown);
  remaining = totalSeconds;
  updateDisplay(remaining);
  startBtn.disabled = false;
  resetBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// tampilkan waktu awal 00:10
updateDisplay(remaining);
