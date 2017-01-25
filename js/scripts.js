/////////////////////
//Back-End
/////////////////////
var currentScore = 0;

function rollDie() {
  var roll =  Math.floor(Math.random() * 6) + 1;
  currentScore += roll;
  return roll;

}


/////////////////////
//Front-End
/////////////////////
