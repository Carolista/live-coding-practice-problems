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
