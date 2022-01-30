var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
];

var startButtonEl = document.querySelector("#start-btn");
var saveButtonEl = document.querySelector(".score");
var quizBoxEl = document.querySelector("section");
var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

var time = 15;
var intervalId;

function startQuiz() {
  startButtonEl.classList.add("hide")
  quizBoxEl.classList.remove("hide")
  intervalId = setInterval(updateTime, 1000);
}

function endQuiz() {
  clearInterval(intervalId);
  var body = document.body;
    body.classList.add("container")
    body.innerHTML = "Game over, You scored " + correctCount;
  var initialsEl = document.createElement("form")
    initialsEl.className = "initials";
    initialsEl.innerHTML = "<input>";
    body.appendChild(initialsEl)
  var highScoreEl = document.createElement("button");
    highScoreEl.className = "score";
    highScoreEl.innerHTML = "Save";
    body.appendChild(highScoreEl);
  var playAgainEl = document.createElement("button");
    playAgainEl.className = "restart";
    playAgainEl.innerHTML = "Play Again";
    body.appendChild(playAgainEl);
}

function saveHighScore() {
  console.log("clicked the save button!");
  prevent
}

function updateTime() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion() {
  
  if (time == 0) {
    updateTime();
    return;
  }

  
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLenth = choices.length;

  for (var i = 0; i < choicesLenth; i++) {
    var questionListItem = document.createElement("button");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("button")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time = time - 2;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}

renderQuestion();
startButtonEl.addEventListener('click', startQuiz);
optionListEl.addEventListener("click", checkAnswer);
