let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  } else {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

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
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

function resetStop() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("hours").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
}
