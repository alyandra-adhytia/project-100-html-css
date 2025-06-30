const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function updateClock() {
  const now = new Date();
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours() % 12;

  const secDeg = (secs / 60) * 360 + 90;
  const minDeg = (mins / 60) * 360 + (secs / 60) * 6 + 90;
  const hrDeg  = (hrs / 12) * 360 + (mins / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
