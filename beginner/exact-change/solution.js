/*
  Set test data
*/

let amount1 = 6.47;
let currency1 = {
  tens: 0,
  fives: 1,
  ones: 3,
  quarters: 1,
  dimes: 3,
  nickels: 2,
  pennies: 4
}

let amount2 = 14.81;
let currency2 = {
  tens: 1,
  fives: 0,
  ones: 4,
  quarters: 1,
  dimes: 1,
  nickels: 0,
  pennies: 2
}


/* 
  Solution 1
*/

function countCash(amount, currency) {
  let total = currency.tens * 10
    + currency.fives * 5 + currency.ones
    + currency.quarters * 0.25 + currency.dimes * 0.10
    + currency.nickels * 0.05 + currency.pennies * 0.01;
  if (total >= amount) {
    console.log("Cash it is!");
  } else {
    console.log("Not enough money...");
  }
}

countCash(amount1, currency1);
countCash(amount2, currency2);

/*
  Solution 2 - Destructuring & ternary expression
*/

function countCash2(amount, currency) {
  let { tens, fives, ones, quarters, dimes, nickels, pennies } = currency;
  let total = tens * 10 + fives * 5 + ones + quarters * 0.25 
    + dimes * 0.10 + nickels * 0.05 + pennies * 0.01;
  console.log(total >= amount ? "Cash it is!" : "Not enough money...");
}

countCash2(amount1, currency1);
countCash2(amount2, currency2);
