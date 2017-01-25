# _Gentile Dreidel_

#### _A game a lot like dreidel, but not; 01/25/2017_

#### By _**Keith Evans and Brynna McCarter**_

## Description

_This is a game where two players roll dice trying to score 100 points. A player can continue to roll until they choose to pass and store their score, or they roll a one and lose all their points for that turn._

## Setup/Installation Requirements

* _Clone GitHub repository_
* _Open index.html in any web browser_
* _Enjoy!_

## Application Specs

* The program will return a random integer between 1 and 6.
  * **Example Input:** (click)
  * **Example Output:** 3
* The program will add the current die value to the current score.
  * **Example Input:** currentscore: 3, roll: 3
  * **Example Output:** currentscore: 6
* The program will set the current score to 0 if a 1 is rolled.
  * **Example Input:** currentscore: 60, roll: 1
  * **Example Output:** currentscore: 0
* The program will increment the total score by the current score if a player passes.
  * **Example Input:** currentscore: 20, totalscore: 0, (click: pass)
  * **Example Output:** currentscore: 0, totalscore: 20
* The program will end when a player's totalscore + the current score is >= 100.
  * **Example Input:** totalscore: 90, currentscore: 11
  * **Example Output:** "Game over!"
* The program will accept names from 2 players and store them.
  * **Example Input:**
  * **Example Output:**
* The program will recognize the active player and attribute points to them.
  * **Example Input:**
  * **Example Output:**
* The program will alternate active player when a 1 is rolled or the pass button is clicked.
  * **Example Input:**
  * **Example Output:**


## Known Bugs

_Ain't no bugs._

## Support and contact details

_Any questions, comments, or bug reports can be directed to the repository administrator._

## Technologies Used

_HTML/CSS/Bootstrap/JavaScript/jQuery_

### License

*This webpage is under the MIT License.*

Copyright (c) 2017 **_Brynna McCarter and Keith Evans_**
