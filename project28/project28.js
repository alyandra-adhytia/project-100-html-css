// Fungsi untuk menghitung usia berdasarkan tahun lahir
function hitungUsia() {
  // Ambil nilai tahun lahir yang dimasukkan
  const tahunLahir = document.getElementById('tahunLahir').value;

  // Cek apakah input tahun lahir kosong atau tidak valid
  if (tahunLahir === "" || isNaN(tahunLahir) || tahunLahir < 1900 || tahunLahir > new Date().getFullYear()) {
    document.getElementById('hasil').innerHTML = "Tolong masukkan tahun lahir yang valid!";
  } else {
    // Hitung usia berdasarkan tahun lahir
    const usia = new Date().getFullYear() - tahunLahir;
    document.getElementById('hasil').innerHTML = "Usia Anda adalah " + usia + " tahun.";
  }
}

