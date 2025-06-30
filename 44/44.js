const answers = [
  "Ya, pasti!",
  "Tidak, coba lagi.",
  "Mungkin, waktunya belum tepat.",
  "Tanya lagi nanti.",
  "Tidak bisa dipastikan."
];

const askBtn = document.getElementById('askBtn');
const questionInput = document.getElementById('question');
const answerEl = document.getElementById('answer');

askBtn.addEventListener('click', () => {
  const question = questionInput.value.trim();
  if (!question) {
    answerEl.textContent = "Tanyakan sesuatu terlebih dahulu!";
    return;
  }
  const randomIndex = Math.floor(Math.random() * answers.length);
  answerEl.textContent = answers[randomIndex];
});
