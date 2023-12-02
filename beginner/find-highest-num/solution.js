/*
  Set test data
*/

let testNums1 = [3, -1, 9, 2, -4, 7, 6, 1, 5];
let testNums2 = [1];
let testNums3 = [-62, -79, -44, -22, -88];


/* 
  Solution 1
*/

function findHighestNum(numArr) {
  let highestNumIndex = 0;
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > numArr[highestNumIndex]) {
      highestNumIndex = i;
    }
  }
  return highestNumIndex;
}

console.log(findHighestNum(testNums1));
console.log(findHighestNum(testNums2));
console.log(findHighestNum(testNums3));


/* 
  Solution 2 - Alt approach of tracking number instead of its index
*/

function findHighestNum2(numArr) {
  let highestNum = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > highestNum) {
      highestNum = numArr[i];
    }
  }
  return numArr.indexOf(highestNum);
}

console.log(findHighestNum2(testNums1));
console.log(findHighestNum2(testNums2));
console.log(findHighestNum2(testNums3));


/* 
  Solution 3 - Advanced syntax with Math object and spread operator
*/

function findHighestNum3(numArr) {
  let highestNum = Math.max(...numArr);
  return numArr.indexOf(highestNum);
}

console.log(findHighestNum3(testNums1));
console.log(findHighestNum3(testNums2));
console.log(findHighestNum3(testNums3));
