/////////////////////
//Back-End
/////////////////////
var currentScore = 0;

function rollDie() {
  var roll =  Math.floor(Math.random() * 6) + 1;
  if (roll === 1) {
    currentScore = 0;
  } else {
    currentScore += roll;
  }
  return roll;
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
});
