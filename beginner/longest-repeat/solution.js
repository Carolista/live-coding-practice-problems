/* 
  Solution
*/

let testStr1 = "aaa";
let testStr2 = "a";
let testStr3 = "bdsagbgagggaaatttyyyyau";
let testStr4 = "abcdefghijklmnopqrstuvwxyz";
let testStr5 = "";

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
