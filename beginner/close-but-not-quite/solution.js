/*
  Notes & clarifications

  Function - input is array of positive integers
  No output, just print something
  Print "(num) is so close" if num is -1 to +1 of a multiple of 7
  Print "(num) is not close" otherwise

  Could use modulo to check multiple of 7
*/


/*
  Pseudocode

  loop over array
    get remainder of num div by 7
    if remainder is 1 or 6, print that it's close
    otherwise print that it's not close
*/


/*
  Set test data
*/

let testNums = [38, 29, 15, 59, 84, 43, 70, 2];


/* 
  Solution 1
*/

function checkCloseness(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    let remainder = numArr[i] % 7;
    if (remainder === 0) { // new requirement
      console.log(`${numArr[i]} isn't just close, it's PERFECT!`); 
    } else if (remainder === 1 || remainder === 6) {
      console.log(`${numArr[i]} is SO CLOSE!`)
    } else {
      console.log(`${numArr[i]} is not close.`)
    }
  }
}

checkCloseness(testNums);


/* 
  Solution 2 - Stringbuilding with modern JS syntax
*/

function checkCloseness2(numArr) {
  numArr.forEach(num => {
    let rem = num % 7;
    let result = `${num} is`;
    if (rem === 0) result += "n't just close, it's PERFECT!";
    else if (rem === 1 || rem === 6) result += " SO CLOSE!";
    else result += " not close.";
    console.log(result);
  });
}

checkCloseness2(testNums);
