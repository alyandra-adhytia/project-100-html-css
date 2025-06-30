const questionEl = document.getElementById('question');
const answerBtns = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

let questions = [];
let currentIndex = 0;
let score = 0;

async function fetchQuiz() {
  const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
  const data = await res.json();
  questions = data.results.map(q => {
    const answers = [...q.incorrect_answers, q.correct_answer];
    return {
      question: decodeHTML(q.question),
      answers: shuffleArray(answers),
      correct: q.correct_answer
    };
  });
}

function decodeHTML(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  scoreEl.textContent = '';
  nextBtn.style.display = 'none';
  loadQuestion();
}

function loadQuestion() {
  resetState();
  const q = questions[currentIndex];
  questionEl.textContent = q.question;
  q.answers.forEach(ans => {
    const btn = document.createElement('button');
    btn.innerText = ans;
    btn.className = 'btn';
    btn.addEventListener('click', () => selectAnswer(btn, q.correct));
    answerBtns.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = 'none';
  answerBtns.innerHTML = '';
}

function selectAnswer(btn, correctAns) {
  const correct = btn.innerText === correctAns;
  btn.classList.add(correct ? 'correct' : 'wrong');
  if (correct) score++;
  Array.from(answerBtns.children).forEach(b => b.disabled = true);
  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = 'Quiz selesai!';
    answerBtns.innerHTML = '';
    scoreEl.textContent = `Skor kamu: ${score} / ${questions.length}`;
    nextBtn.style.display = 'none';
  }
});

fetchQuiz().then(startQuiz);
