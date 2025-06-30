let alarmTime = null;
let alarmTimeout = null;
let isAlarmActive = false;

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

  if (alarmTime && !isAlarmActive) {
    const alarm = new Date();
    alarm.setHours(alarmTime.hours);
    alarm.setMinutes(alarmTime.minutes);
    alarm.setSeconds(0);

    if (now >= alarm) {
      isAlarmActive = true;
      document.getElementById('stopAlarm').style.display = 'inline';
      alert('Alarm ringing!');
    }
  }
}

document.getElementById('setAlarm').addEventListener('click', () => {
  const time = document.getElementById('alarmTime').value;
  if (time) {
    const [hours, minutes] = time.split(':').map(Number);
    alarmTime = { hours, minutes };
    isAlarmActive = false;
    document.getElementById('stopAlarm').style.display = 'none';
    alert(`Alarm set for ${alarmTime.hours}:${alarmTime.minutes}`);
  }
});

document.getElementById('stopAlarm').addEventListener('click', () => {
  isAlarmActive = false;
  document.getElementById('stopAlarm').style.display = 'none';
  alert('Alarm stopped');
});

setInterval(updateClock, 1000);
updateClock();
