const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

const questions = [
  {
    question: 'Apa ibukota Indonesia?',
    answers: [
      { text: 'Jakarta', correct: true },
      { text: 'Bandung', correct: false },
      { text: 'Surabaya', correct: false },
      { text: 'Medan', correct: false }
    ]
  },
  {
    question: 'Berapa 2 + 2?',
    answers: [
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false },
      { text: '22', correct: false }
    ]
  }
  // Tambahkan pertanyaan lain bila perlu
];

let shuffledQuestions, currentIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentIndex = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentIndex]);
}

function showQuestion(q) {
  questionElement.innerText = q.question;
  q.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.innerText = answer.text;
    btn.classList.add('btn');
    if (answer.correct) btn.dataset.correct = answer.correct;
    btn.addEventListener('click', selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selected = e.target;
  const correct = selected.dataset.correct === 'true';
  setStatusClass(selected, correct);
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === 'true');
    button.disabled = true;
  });
  if (shuffledQuestions.length > currentIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, isCorrect) {
  clearStatusClass(element);
  element.classList.add(isCorrect ? 'correct' : 'wrong');
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
