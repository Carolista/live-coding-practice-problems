/*
  Notes & clarifications

  Write a function that takes string of alpha chars
  Find the longest substring of identical characters (consecutive)
  Return length of substring

  May want to handle empty string or single character as an early return
*/


/*
  Pseudocode

  Create variable to store longest length (set to 1)
  Create variable to track current count of length (set to 1)
  If length of string is less than 2, return length
  Loop through string, starting with index 1 
    If char at i is the same as char at i-1
      increase current count
      if current count is greater than longest
        set longest to current
    Otherwise
      Reset current to 1
  Return longest length
*/


/*
  Set test data
*/

let testStr1 = "aaa";
let testStr2 = "a";
let testStr3 = "bdsagbgagggaaatttyyyyau";
let testStr4 = "abcdefghijklmnopqrstuvwxyz";
let testStr5 = "";


/* 
  Solution
*/

function findLongestRepeat(str) {
  let longest = 1;
  let currCount = 1;
  if (str.length < 2) {
    return str.length; // 0 or 1
  }
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currCount++;
      if (currCount > longest) {
        longest = currCount;
      }
    } else {
      currCount = 1;
    }
  }
  return longest;
}

console.log(findLongestRepeat(testStr1));
console.log(findLongestRepeat(testStr2));
console.log(findLongestRepeat(testStr3));
console.log(findLongestRepeat(testStr4));
console.log(findLongestRepeat(testStr5));
