function hitung() {
  const angka1 = parseFloat(document.getElementById('angka1').value);
  const angka2 = parseFloat(document.getElementById('angka2').value);
  const operator = document.getElementById('operator').value;
  const hasil = document.getElementById('hasil');

  if (isNaN(angka1) || isNaN(angka2)) {
    hasil.textContent = "Masukkan kedua angka dengan benar!";
    return;
  }

  let total;
  switch (operator) {
    case '+':
      total = angka1 + angka2;
      break;
    case '-':
      total = angka1 - angka2;
      break;
    case '*':
      total = angka1 * angka2;
      break;
    case '/':
      total = angka2 !== 0 ? (angka1 / angka2) : "Tak terhingga (pembagian dengan 0)";
      break;
    default:
      total = "Operasi tidak dikenal";
  }

  hasil.textContent = `Hasil: ${total}`;
}
