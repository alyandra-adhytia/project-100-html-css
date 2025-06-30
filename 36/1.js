// === Voice-to-Text ===
const startBtn = document.getElementById('startBtn');
const voiceOutput = document.getElementById('voiceOutput');

if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
  voiceOutput.textContent = 'Browser tidak mendukung SpeechRecognition.';
} else {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'id-ID';
  recognition.interimResults = false;

  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    voiceOutput.textContent = text;
  };
  recognition.onerror = () => voiceOutput.textContent = 'Terjadi kesalahan saat mengenali suara.';

  startBtn.addEventListener('click', () => recognition.start());
}

// === Canvas Drawing ===
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mousemove', (e) => {
  if (!drawing) return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

document.getElementById('clearCanvas').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
});
