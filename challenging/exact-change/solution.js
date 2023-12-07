/*
  Notes & clarifications

  Part 1
  Write function, takes number and object
  No return value, just print

  Number parameter is a cost
  Object will have keys for denominations and their values will be the number of bills for that denomination

  Count up total money on hand
  Print "Not enough money" or "Cash it is" depending on whether you can cover the cost

  Part 2
  Determine if you have exact change
  Helper function(s)
  If so, print something different instead

  Might be useful to create an object with same keys for currency to store multiplier
*/


/*
  Pseudocode

  Part 1
  Create variable to track total money on hand
  Loop through object parameter
    Use key to multiple amount by the multiplier for that denomination
  If total is less than cost
    Print "Not enough money"
  Else 
    Print "Cash it is!"

  Part 2
  Helper function (maybe split into two?)
  Take in cost number and currency object
  Loop through keys in currency object
    While bills of that type are available AND the balance is still greater than 1 bill
      reduce balance by 1 bill
  Return boolean: balance equals 0

  Update original function to print third phrase by checking for exact change before the other two conditions
*/


/*
  Set test data
*/

let cost1 = 24;
let currency1 = {
  twenties: 1,
  tens: 0,
  fives: 1,
  ones: 3,
}

let cost2 = 16;
let currency2 = {
  twenties: 0,
  tens: 1,
  fives: 0,
  ones: 4,
}

let cost3 = 112;
let currency3 = {
  twenties: 4,
  tens: 3,
  fives: 2,
  ones: 7,
}


/*
  Set useful values by same keys as currency object
*/

let values = {
  twenties: 20,
  tens: 10,
  fives: 5,
  ones: 1,
};


/* 
  Solution
*/

function countCash(cost, currency) {
  let total = 0;
  for (let moneyType in currency) {
    total += currency[moneyType] * values[moneyType];
  }
  if (hasExactChange(cost, currency)) {
    console.log("Hey, look, I have exact change!");
    return;
  }
  console.log(total >= cost ? "Cash it is!" : "Not enough money...");
}

function hasExactChange(balance, currency) {
  for (let moneyType in currency) {
    balance = applyAvailableCash(balance, moneyType, currency[moneyType]);
  }
  return balance === 0;
}

function applyAvailableCash(balance, moneyType, numAvailable) {
  while (balance >= values[moneyType] && numAvailable > 0) {
    balance -= values[moneyType];
    numAvailable--;
  }
  return balance;
}

countCash(cost1, currency1);
countCash(cost2, currency2);
countCash(cost3, currency3);
