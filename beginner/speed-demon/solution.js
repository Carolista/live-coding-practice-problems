/*
  Notes & clarifications
*/


/*
  Pseudocode
*/


/* 
  Solution 1
*/

function slowYourRoll(limit, speed, isHighway) {
  if (isHighway && speed - limit > 12) {
    console.log("Pull over, citizen!");
  } else if (!isHighway && speed - limit > 7) {
    console.log("Pull over, citizen!");
  } else {
    console.log("Phew! Close call.");
  }
}

slowYourRoll(70, 87, true);
slowYourRoll(35, 42, false);
slowYourRoll(65, 77, true);
slowYourRoll(40, 49, false);

/*
  Solution 2 - Modern JS syntax - ternary expressions
*/

function slowYourRoll2(limit, speed, isHighway) {
  let maxDiff = isHighway ? 12 : 7;
  let ohCrap = "Pull over, citizen!";
  let phew = "Phew! Close call";
  console.log(speed - limit > maxDiff ? ohCrap : phew);
}

slowYourRoll2(70, 87, true);
slowYourRoll2(35, 42, false);
slowYourRoll2(65, 77, true);
slowYourRoll2(40, 49, false);
