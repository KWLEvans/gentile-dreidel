/////////////////////
//Back-End
/////////////////////
var currentScore = 0;
var player1;
var player2;
var activePlayer;


function Player(name) {
  this.name = name;
  this.totalScore = 0;
}

Player.prototype.addScore = function(score) {
  this.totalScore += score;
}

function rollDie() {
  var roll =  Math.floor(Math.random() * 6) + 1;
  if (roll === 1) {
    currentScore = 0;
    passTurn();
  } else {
    currentScore += roll;
  }
  checkScore();
  return roll;
}

function passTurn() {
  activePlayer.addScore(currentScore);
  currentScore = 0;
  if (activePlayer === player1) {
    activePlayer = player2;
  } else {
    activePlayer = player1;
  }
  alert("It's " + activePlayer.name + "'s turn!");
}

function checkScore() {
  if (activePlayer.totalScore + currentScore >= 100) {
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
    $("#player1-score").text(player1.totalScore);
    $("#player2-score").text(player2.totalScore);
  });

  $("#name1-form").submit(function(event) {
    event.preventDefault();
    var name = $("#name1-field").val();
    player1 = new Player(name);
    activePlayer = player1;
    $("#name1-form").hide();
    $("#name2-form").show();
    $("#p1-name").text(player1.name);
  });

  $("#name2-form").submit(function(event) {
    event.preventDefault();
    var name = $("#name2-field").val();
    player2 = new Player(name);
    $("#name2-form").hide();
    $("#p2-name").text(player2.name);
    $("#circles").show();
  });
});
