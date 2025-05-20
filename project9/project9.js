function cekJawaban() {
  const jawaban1 = document.querySelector('input[name="q1"]:checked');
  const jawaban2 = document.querySelector('input[name="q2"]:checked');
  let skor = 0;

  if (jawaban1 && jawaban1.value === "c") skor++;
  if (jawaban2 && jawaban2.value === "b") skor++;

  if (!jawaban1 || !jawaban2) {
    document.getElementById('hasil').textContent = "Harap jawab semua pertanyaan!";
    return;
  }

  document.getElementById('hasil').textContent = `Skormu: ${skor} dari 2 pertanyaan`;
}
