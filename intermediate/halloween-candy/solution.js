/* 
  Solution
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
