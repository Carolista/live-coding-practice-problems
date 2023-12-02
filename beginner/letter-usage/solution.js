/* 
  Solution 1
*/

let testStr = "St. Louis, Kansas City, and Philadelphia";

function countCharacters(str) {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (counts[char] === undefined) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  }
  return counts;
}

console.log(countCharacters(testStr));


/*
  Solution 2 - Modern syntax
*/

function countCharacters2(str) {
  let counts = {};
  str.toLowerCase().split("").forEach(char => {
    let isNewChar = counts[char] === undefined;
    counts[char] = isNewChar ? 1 : counts[char] + 1;
  });
  return counts;
}

console.log(countCharacters2(testStr));
