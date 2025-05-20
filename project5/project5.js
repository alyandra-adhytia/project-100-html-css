function tambahTugas() {
  const input = document.getElementById('tugasInput');
  const tugas = input.value.trim();
  const daftar = document.getElementById('daftarTugas');

  if (tugas === "") {
    alert("Masukkan nama tugas dulu ya!");
    return;
  }

  const itemBaru = document.createElement('li');
  itemBaru.innerHTML = `
    ${tugas}
    <button class="hapus-btn" onclick="hapusTugas(this)">Hapus</button>
  `;

  daftar.appendChild(itemBaru);
  input.value = "";
}

function hapusTugas(tombol) {
  const item = tombol.parentElement;
  item.remove();
}
