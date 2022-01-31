var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    .map( score => {
        // template literals are enclosed by backticks not single or double quotes
        return `<p class="flex-center">${score.name} - ${score.score}<p/>`;
})
.join("");