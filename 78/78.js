let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  attempts++;
  const feedback = document.getElementById("feedback");

  if (isNaN(guess)) {
    feedback.textContent = "Masukkan angka yang valid.";
  } else if (guess < secretNumber) {
    feedback.textContent = "Terlalu rendah! Coba lagi.";
  } else if (guess > secretNumber) {
    feedback.textContent = "Terlalu tinggi! Coba lagi.";
  } else {
    feedback.textContent = `Selamat! Anda menebak dengan benar dalam ${attempts} percobaan.`;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
  }
}
