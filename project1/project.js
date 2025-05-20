function sapa() {
  const nama = document.getElementById('nama').value;
  const hasil = document.getElementById('hasil');

  if (nama.trim() === "") {
    hasil.textContent = "Silakan isi namamu terlebih dahulu.";
  } else {
    hasil.textContent = "Halo, " + nama + "! Senang bertemu denganmu 😊";
  }
}
