function hitungUmur() {
  const tahunLahir = document.getElementById('tahunLahir').value;
  const hasil = document.getElementById('hasil');
  const tahunSekarang = new Date().getFullYear();

  if (tahunLahir === "" || isNaN(tahunLahir)) {
    hasil.textContent = "Masukkan tahun lahir yang valid.";
    return;
  }

  const umur = tahunSekarang - parseInt(tahunLahir);

  if (umur < 0 || umur > 120) {
    hasil.textContent = "benget sia ah capruk 😅";
  } else {
    hasil.textContent = "dan yap umur kamu sekarang " + umur + " tahun.";
  }
}
