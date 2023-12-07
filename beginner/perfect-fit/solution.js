/*
  Notes & clarifications

  Write function that takes three numbers
  Check to see if any two of the numbers add up to the third
  Return true or false

  No negative numbers
  Doesn't matter what order the numbers are in
*/


/*
  Pseudocode

  if num 1 and num 2 add up to num 3
    return true
  if num 1 and num 3 add up to num 2
    return true
  if num 2 and num 3 add up to num 1
    return true
  else
    return false
*/


/* 
  Solution 1 - Less concise but perfectly valid
*/

function numsArePerfectFit(a, b, c) {
  if (a + b === c) {
    return true;
  } else if (a + c === b) {
    return true;
  } else if (b + c === a) {
    return true;
  } else {
    return false;
  }
}

console.log(numsArePerfectFit(1, 2, 3));
console.log(numsArePerfectFit(8, 2, 6));
console.log(numsArePerfectFit(2, 2, 1));
console.log(numsArePerfectFit(3, 7, 4));
console.log(numsArePerfectFit(4, 4, 0));
console.log(numsArePerfectFit(5, 7, 3));


/* 
  Solution 2 - Still basic syntax, but very concise
*/

function numsArePerfectFit(a, b, c) {
  return a + b === c || a + c === b || b + c === a;
}

console.log(numsArePerfectFit(1, 2, 3));
console.log(numsArePerfectFit(8, 2, 6));
console.log(numsArePerfectFit(2, 2, 1));
console.log(numsArePerfectFit(3, 7, 4));
console.log(numsArePerfectFit(4, 4, 0));
console.log(numsArePerfectFit(5, 7, 3));
