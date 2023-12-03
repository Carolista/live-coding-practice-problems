/*
  Set test data
*/

let testNums1 = "1 5 12 16";
let testNums2 = "4 1 7 9 15";
let testNums3 = "0 6 23 82 125 199 204 214 215 309 477 581";
let testNums4 = "1 2 3 4 5 5 6 7 8 9";


/* 
  Solution 1
*/

function isInAscOrder(numStr) {
  let numArr = numStr.split(" ");
  for (let i = 1; i < numArr.length; i++) {
    if (Number(numArr[i]) <= Number(numArr[i-1])) {
      return false;
    }
  }
  return true;
}

console.log(isInAscOrder(testNums1));
console.log(isInAscOrder(testNums2));
console.log(isInAscOrder(testNums3));
console.log(isInAscOrder(testNums4));


/* 
  Solution 2 - Use Set to remove duplicates then sort & compare

  In terms of optimization, this is much faster than solution 1.
*/

function isInAscOrder2(numStr) {
  let numArr = numStr.split(" ");
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = Number(numArr[i]);
  }
  let sorted = Array.from(new Set(numArr)).sort(function (a, b) {
    return a - b;
  });
  return numStr === sorted.join(" ");
}

console.log(isInAscOrder2(testNums1));
console.log(isInAscOrder2(testNums2));
console.log(isInAscOrder2(testNums3));
console.log(isInAscOrder2(testNums4));


/* 
  Solution 3 - Same as solution 2 but with modern JS syntax
*/

function isInAscOrder3(numStr) {
  let numArr = numStr.split(" ").map(num => Number(num));
  let sorted = Array.from(new Set(numArr)).sort((a, b) => a - b);
  return numStr === sorted.join(" ");
}

console.log(isInAscOrder3(testNums1));
console.log(isInAscOrder3(testNums2));
console.log(isInAscOrder3(testNums3));
console.log(isInAscOrder3(testNums4));
