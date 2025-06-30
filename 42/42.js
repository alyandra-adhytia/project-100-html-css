const flashcards = [
  {question: "Apa kepanjangan HTML?", answer: "HyperText Markup Language"},
  {question: "Fungsi CSS itu apa?", answer: "Untuk mengatur tampilan halaman web"},
  {question: "JS adalah singkatan dari?", answer: "JavaScript"},
  {question: "DOM itu apa?", answer: "Document Object Model"},
  {question: "Fungsi Math.random()?", answer: "Menghasilkan angka acak antara 0 dan 1"}
];

const container = document.getElementById("flashcard-container");

flashcards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${card.question}</div>
      <div class="card-back">${card.answer}</div>
    </div>`;
  div.addEventListener("click", () => div.classList.toggle("flipped"));
  container.appendChild(div);
});
