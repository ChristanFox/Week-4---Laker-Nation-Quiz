var questions = [
  {
    question: "Which center has NOT played for the Lakers?",
    choices: ["Dwight Howard", "Shaquille O'Neal", "Hakeem Olajuwon", "Kareem Abdul-Jabar"],
    answer: "Hakeem Olajuwon",
  },
  {
    question:
      "The Lakers have won ___ championship titles.",
    choices: ["18", "0", "46", "7"],
    answer: "18",
  },
  {
    question:
      "How many points did Kobe Bryant score against the Toronto Raptors that night?",
    choices: ["0", "24", "8", "81"],
    answer: "81",
  },
  {
    question:
      "How many former Laker players have been inducted into the hall of fame?",
    choices: ["18", "28", "32", "7"],
    answer: "28",
  },
  {
    question:
      "What is the name of the stadium that the Lakers play in?",
    choices: ["Barclays Center", "Prudential Center", "Staples Center", "Paycom Center"],
    answer: "Staples Center",
  },
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var startButtonEl = document.querySelector("#btns");
var quizBoxEl = document.querySelector("section");

var questionIndex = 0;
var correctCount = 0;

var time = 20;
var intervalId;

function startQuiz() {
  startButtonEl.classList.add("hide")
  quizBoxEl.classList.remove("hide")
}

function endQuiz() {
  clearInterval(intervalId);
  // var body = document.body;
  // body.innerHTML = "Game over, You scored " + correctCount;
  window.location.assign("./end.html")
  var saveScores = function() {
    localStorage.setItem("score", JSON.stringify(correctCount));
  }
  saveScores();
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

  intervalId = setInterval(updateTime, 1000);
  
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


optionListEl.addEventListener("click", checkAnswer);
startButtonEl.addEventListener('click', startQuiz);
startButtonEl.addEventListener('click', renderQuestion);