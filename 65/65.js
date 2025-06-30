let startStopBtn = document.getElementById('startStop');
let resetBtn = document.getElementById('reset');
let timeDisplay = document.getElementById('time');
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  timeDisplay.textContent =
    (hours < 10 ? '0' : '') + hours + ':' +
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds;
}

startStopBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    startStopBtn.textContent = 'Stop';
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  startStopBtn.textContent = 'Start';
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeDisplay.textContent = '00:00:00';
});
