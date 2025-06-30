let alarmTime = null;
let alarmTimeout = null;

function setAlarm() {
  const inputTime = document.getElementById("alarmTime").value;
  if (!inputTime) {
    document.getElementById("status").textContent = "Masukkan waktu alarm yang valid.";
    return;
  }

  const [hours, minutes] = inputTime.split(":").map(Number);
  const now = new Date();
  const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);

  if (alarmDate <= now) {
    alarmDate.setDate(alarmDate.getDate() + 1);
  }

  const timeToAlarm = alarmDate - now;
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
  }

  alarmTimeout = setTimeout(() => {
    document.getElementById("status").textContent = "ALARM! Waktunya bangun!";
    alert("ALARM! Waktunya bangun!");
  }, timeToAlarm);

  document.getElementById("status").textContent = `Alarm disetel untuk ${alarmDate.toLocaleTimeString()}`;
}
