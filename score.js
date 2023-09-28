// Iteration 8: Making scoreboard functional
const again = document.getElementById("play-again-button");
again.onclick= () => {
    location.href="./game.html"
}

var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
var score = urlParams.get("score");
var scoreboard = document.getElementById("score-board")
scoreboard.innerHTML=score;