var saveButtonEl = document.querySelector("#saveScoreBtn");
var mostRecentScore = localStorage.getItem("score");
var finalScore = document.getElementById("finalScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);


finalScore.innerText = mostRecentScore;

function saveHighScore() {
    event.preventDefault();
    var score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score)
    highScores.splice(5);    

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./scores.html")

    console.log(highScores);
};

saveButtonEl.addEventListener('click', saveHighScore);