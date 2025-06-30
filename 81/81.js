const words = ["JAVASCRIPT", "PROGRAM", "TEKNOLOGI", "INDONESIA", "KOMPUTER"];
let selectedWord = "";
let guessedLetters = [];
let maxLives = 6;
let lives = maxLives;

function startGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  lives = maxLives;
  document.getElementById("message").textContent = "";
  updateDisplay();
}

function updateDisplay() {
  const display = selectedWord
    .split("")
    .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  document.getElementById("displayWord").textContent = display;
  document.getElementById("guessedLetters").textContent = guessedLetters.join(", ") || "-";
  document.getElementById("lives").textContent = lives;

  if (!display.includes("_")) {
    document.getElementById("message").textContent = "🎉 Selamat! Kamu menebak katanya!";
    document.removeEventListener("keydown", handleKey);
  }

  if (lives <= 0) {
    document.getElementById("message").textContent = `😢 Kamu kalah. Kata yang benar: ${selectedWord}`;
    document.removeEventListener("keydown", handleKey);
  }
}

function handleKey(e) {
  const letter = e.key.toUpperCase();
  if (/^[A-Z]$/.test(letter) && !guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
    if (!selectedWord.includes(letter)) {
      lives--;
    }
    updateDisplay();
  }
}

function resetGame() {
  document.addEventListener("keydown", handleKey);
  startGame();
}

document.addEventListener("keydown", handleKey);
startGame();