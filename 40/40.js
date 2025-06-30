const clockEl = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${h}:${m}:${s}`;
}

// Jalankan langsung dan perbarui setiap detik
updateClock();
setInterval(updateClock, 1000);
