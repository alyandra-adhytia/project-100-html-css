function tambahTugas() {
  const input = document.getElementById("tugas");
  const nilaiTugas = input.value.trim();
  const daftar = document.getElementById("daftarTugas");

  if (nilaiTugas === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  // Buat elemen <li> baru
  const itemBaru = document.createElement("li");
  itemBaru.textContent = nilaiTugas;

  // Tambahkan ke <ul>
  daftar.appendChild(itemBaru);

  // Kosongkan input
  input.value = "";
}
