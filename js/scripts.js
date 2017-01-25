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
  return roll;
}

function passTurn() {
  totalScore += currentScore;
  console.log(totalScore);
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
  });
});
