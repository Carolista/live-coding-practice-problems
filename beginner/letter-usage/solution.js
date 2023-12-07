/*
  Notes & clarifications

  Write a function, takes a string
  count number of times each character appears in string
  return object with key/value pairs (character: count)

  Characters can be anything - alphanumeric, punctuation, spaces
*/


/*
  Pseudocode

  Create new object to collect counts
  Loop over string
    if character has not yet been added as key in object
      add key with count of 1
    otherwise 
      increase count of existing key
  return object
*/


/*
  Set test data
*/

let testStr = "St. Louis, Kansas City, and Philadelphia";


/* 
  Solution 1
*/

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
