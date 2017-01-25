/////////////////////
//Back-End
/////////////////////
var currentScore = 0;
var totalScore = 0;

function rollDie() {
  var roll =  Math.floor(Math.random() * 6) + 1;
  if (roll === 1) {
    currentScore = 0;
  } else {
    currentScore += roll;
  }
  checkScore();
  return roll;
}

function passTurn() {
  totalScore += currentScore;
  currentScore = 0;
  console.log(totalScore);
}

function checkScore() {
  if (totalScore + currentScore >= 100) {
    alert("Game over.");
  }
}

/////////////////////
//Front-End
/////////////////////

$(function() {
  $("#roll-button").click(function() {
    var roll = rollDie();
    $("#dice-roll").text(roll);
    $("#current-score").text(currentScore);
  });

  $("#pass-button").click(function() {
    passTurn();
    $("#dice-roll").text(0);
    $("#current-score").text(0);
  });
});
