// Tentukan tanggal dan waktu target
const targetDate = new Date("2025-12-31T23:59:59").getTime();

// Fungsi untuk menghitung waktu mundur
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Waktu telah habis!";
    clearInterval(interval);
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }
}

// Perbarui setiap detik
const interval = setInterval(updateCountdown, 1000);
