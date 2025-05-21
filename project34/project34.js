function jumlahkan() {
  // Ambil nilai dari input
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);

  // Periksa apakah input valid
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Mohon masukkan dua angka yang valid.");
    return;
  }

  // Hitung jumlah
  let hasil = angka1 + angka2;

  // Tampilkan hasil
  document.getElementById("hasil").textContent = hasil;
}
