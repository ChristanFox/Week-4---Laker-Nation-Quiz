var saveButtonEl = document.querySelector("#saveScoreBtn");
var score =localStorage.getItem("score");
var finalScore = document.getElementById("finalScore");
finalScore.innerText = score;

function saveHighScore() {
    event.preventDefault();
    console.log("Saved!")
}


saveButtonEl.addEventListener('click', saveHighScore);
username.addEventListener('keyup', ()=>{
    console.log(username.value);
});
/*var loadScores = function() {
    var savedScores = localStorage.getItem("score");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedScores) {
      return false;
    }
    
    // parse into array of objects
    savedScores = JSON.parse(savedScores);

    // loop through savedScores array
    for (var i = 0; i < savedScores.length; i++) {
      // pass each task object into the `createTaskEl()` function
      createTaskEl(savedScores[i]);
    }
  };*/