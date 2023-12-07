/*
  Notes & clarifications 

  Write function to take 2 strings and 1 integer - weather, temp range, and average number of kids
  Return amount of candy needed if 3 pieces given to each kid.

  Halloween candy estimate depends on weather and temperature

  Weather -
  clear +10%
  cloudy (none)
  rain -25%
  full moon +25%

  Temps -
  40s -5%
  50s (none)
  60s +5%
  70s +20%
*/


/*
  Pseudocode

  Create variable to track changes to amount of kids

  if weather clear
    add 10% more kids
  else if weather rainy
    subtract 25% kids
  else if weather is full moon
    add 25% more kids

  if temps in 40s
    subtract 5% kids
  if temps in 60s
    add 5% more kids
  if temps in 70s
    add 20% more kids

  return 3 times the adjusted amount of kids
*/


/* 
  Solution 1
*/

function howMuchCandy(weather, tempRange, avgKids) {

  let adjustedKids = avgKids;
  
  // Weather adjustment
  if (weather === "clear") {
    adjustedKids += avgKids * 0.10;
  } else if (weather === "rainy") {
    adjustedKids -= avgKids * 0.25;
  } else if (weather === "full moon") {
    adjustedKids += avgKids * 0.25;
  } 

  // Temperature adjustment
  if (tempRange === "40s") {
    adjustedKids -= avgKids * 0.05;
  } else if (tempRange === "60s") {
    adjustedKids += avgKids * 0.05;
  } else if (tempRange === "70s") {
    adjustedKids += avgKids * 0.20;
  } 

  return adjustedKids * 3;
  
}

console.log(howMuchCandy("clear", "50s", 250));
console.log(howMuchCandy("full moon", "40s", 120));
console.log(howMuchCandy("rainy", "70s", 180));


/* 
  Solution 2 alt syntax with case statements
*/

function howMuchCandy2(weather, tempRange, avgKids) {

  let adjustedKids = avgKids;
  
  // Weather adjustment
  switch (weather) {
    case "clear":
      adjustedKids += avgKids * 0.10;
    case "rainy":
      adjustedKids -= avgKids * 0.25;
    case "full moon":
      adjustedKids += avgKids * 0.25;
  } 

  // Temperature adjustment
  switch (tempRange) {
    case "40s":
      adjustedKids -= avgKids * 0.05;
    case "60s":
      adjustedKids += avgKids * 0.05;
    case "70s":
      adjustedKids += avgKids * 0.20;
  } 

  return adjustedKids * 3;
  
}

console.log(howMuchCandy2("clear", "50s", 250));
console.log(howMuchCandy2("full moon", "40s", 120));
console.log(howMuchCandy2("rainy", "70s", 180));
