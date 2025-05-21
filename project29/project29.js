// Komputer memilih angka secara acak antara 1 dan 10
const angkaBenar = Math.floor(Math.random() * 10) + 1;

// Fungsi untuk memeriksa tebakan pengguna
function periksaTebakan() {
  // Ambil nilai tebakan dari input
  const tebakan = document.getElementById('tebakan').value;
  const hasil = document.getElementById('hasil');

  // Cek apakah tebakan kosong atau tidak valid
  if (tebakan === "" || isNaN(tebakan) || tebakan < 1 || tebakan > 10) {
    hasil.innerHTML = "Tolong masukkan angka antara 1 dan 10!";
  } else if (tebakan == angkaBenar) {
    hasil.innerHTML = "🎉 Selamat! Tebakan Anda benar.";
  } else {
    hasil.innerHTML = "❌ Salah. Coba lagi!";
  }
}
