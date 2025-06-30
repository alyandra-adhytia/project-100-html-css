const quotes = [
  "Pemrograman adalah seni mengajarkan komputer apa yang harus lakukan.",
  "Latihan membuat sempurna.",
  "Kegagalan hanya membuatmu lebih tangguh.",
  "Belajar setiap hari, tumbuh setiap hari."
];

const quoteEl = document.getElementById('quote');
const typedEl = document.getElementById('typed');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const resultEl = document.getElementById('result');

let startTime, timerRunning = false;

startBtn.addEventListener('click', () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = random;
  typedEl.value = '';
  typedEl.disabled = false;
  typedEl.focus();
  resultEl.textContent = '';
  startTime = Date.now();
  timerRunning = true;
  startBtn.disabled = true;
  resetBtn.disabled = false;
});

typedEl.addEventListener('input', () => {
  if (!timerRunning) return;
  if (typedEl.value === quoteEl.textContent) {
    const elapsed = (Date.now() - startTime) / 1000;
    const wordCount = quoteEl.textContent.split(' ').length;
    const wpm = Math.round((wordCount / elapsed) * 60);
    resultEl.textContent = `WPM: ${wpm} | Waktu: ${elapsed.toFixed(2)}s`;
    timerRunning = false;
    typedEl.disabled = true;
    startBtn.disabled = false;
  }
});

resetBtn.addEventListener('click', () => {
  quoteEl.textContent = '';
  typedEl.value = '';
  typedEl.disabled = true;
  resultEl.textContent = '';
  startBtn.disabled = false;
  resetBtn.disabled = true;
  timerRunning = false;
});
