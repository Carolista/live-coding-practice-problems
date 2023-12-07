/*
  Notes & clarifications

  Get ticket if:
  - More than 12 mph over on highway
  - More than 7 mph over on regular road

  Function should take string for limit, string for speed, and boolean for whether it's a highway or not

  No return value - just print
  "Pull over citizen" if ticket
  "Phew! Close call" if not

  Speed will always be higher than limit
*/


/*
  Pseudocode

  If it's a highway and the speed minus limit is greater than 12
    print "Pull over, citizen"
  If it's not a highway and the speed minus limit is greater than 7
    print "Pull over citizen"
  Otherwise
    print "Phew! Close call"
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
