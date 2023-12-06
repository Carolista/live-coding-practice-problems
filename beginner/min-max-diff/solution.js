/*
  Notes & clarifications
*/


/*
  Pseudocode
*/


/*
  Set test data
*/

let testNums = [15, -10, 22, 84, 14, 88, -3, 23];


/* 
  Solution 1
*/

function findMinMaxDiff(numArr) {
  let min = numArr[0];
  let max = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] < min) {
      min = numArr[i];
    }
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max - min;
}

console.log(findMinMaxDiff(testNums));


/* 
  Solution 2 - Using Math object and spread operator
*/

function findMinMaxDiff2(numArr) {
  return Math.max(...numArr) - Math.min(...numArr);
}

console.log(findMinMaxDiff2(testNums));
