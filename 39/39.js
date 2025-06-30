// array kutipan
const quotes = [
  "Jangan menunggu waktu yang tepat, buatlah waktu menjadi tepat.",
  "Kesuksesan adalah guru yang buruk; ia membuat orang pintar berpikir tidak bisa gagal.",
  "Percayalah pada dirimu sendiri dan semua yang kamu miliki.",
  "Gagal hanya ketika kamu berhenti mencoba.",
  "Hidup ini singkat — jadikan setiap harinya berarti.",
];

// ambil elemen
const quoteEl = document.getElementById("quote");
const btn = document.getElementById("new-quote-btn");

// fungsi ambil kutipan acak
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// pasang event
btn.addEventListener("click", () => {
  quoteEl.textContent = getRandomQuote();
});
