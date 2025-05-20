// Angka acak dari 1 sampai 10
const angkaBenar = Math.floor(Math.random() * 10) + 1;

function tebakAngka() {
  const input = document.getElementById('tebakan').value;
  const hasil = document.getElementById('hasil');
  const angka = parseInt(input);

  if (isNaN(angka) || angka < 1 || angka > 10) {
    hasil.textContent = "Masukkan angka antara 1 sampai 10 ya!";
    return;
  }

  if (angka === angkaBenar) {
    hasil.textContent = "🎉 Selamat! Kamu menebak dengan benar!";
  } else {
    hasil.textContent = "❌ Salah. Coba lagi!";
  }
}
