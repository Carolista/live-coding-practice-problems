/*
  Set test data
*/

let testNums1 = [3, -1, 9, 2, -4, 7, 3, 6, 1, 5];
let testNums2 = [1, 9];
let testNums3 = [1, 2, 2, 3];


/* 
  Solution 1
*/

function hasDuplicates(numArr) {
  let found = [];
  for (let i = 0; i < numArr.length; i++) {
    if (found.includes(numArr[i])) {
      return true;
    }
    found.push(numArr[i]);
  }
  return false;
}

console.log(hasDuplicates(testNums1));
console.log(hasDuplicates(testNums2));
console.log(hasDuplicates(testNums3));


/* 
  Solution 2
*/

function hasDuplicates2(numArr) {
  return numArr.length !== Array.from(new Set(numArr)).length;
}

console.log(hasDuplicates2(testNums1));
console.log(hasDuplicates2(testNums2));
console.log(hasDuplicates2(testNums3));
