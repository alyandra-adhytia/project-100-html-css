function updateJam() {
  const sekarang = new Date();

  let jam = sekarang.getHours().toString().padStart(2, '0');
  let menit = sekarang.getMinutes().toString().padStart(2, '0');
  let detik = sekarang.getSeconds().toString().padStart(2, '0');

  const tampilJam = jam + ":" + menit + ":" + detik;

  document.getElementById('jam').textContent = tampilJam;
}

// Update setiap 1 detik
setInterval(updateJam, 1000);

// Panggil langsung saat pertama kali
updateJam();
