/*
  Notes & clarifications

  Write a function that takes a string
  The string will be a phrase with spaces between words
  Function should return numbers of words in the phrase

  Empty string or single space possible
*/


/*
  Pseudocode

  Without string methods: 

  Early return if length is 0
  Create variable to track count of spaces
  Loop through string
    If character is space, increase count
  If character count is same as string length
    Return 0
  Else
    Return space count + 1

  With string methods:

  If length of trimmed string is 0, return 0
  Otherwise split string on spaces and return length
*/


/*
  Set test data
*/

let testPhrase1 = "One giant leap for mankind";
let testPhrase2 = "a";
let testPhrase3 = "";
let testPhrase4 = "   ";


/* 
  Solution 1 (this is a little clunky but it works)
*/

function countWords(phrase) {
  if (phrase.length === 0) {
    return 0;
  }
  let spaceCount = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      spaceCount++;
    }
  }
  if (spaceCount === phrase.length) {
    return 0;
  }
  return spaceCount + 1;
}

console.log(countWords(testPhrase1));
console.log(countWords(testPhrase2));
console.log(countWords(testPhrase3));
console.log(countWords(testPhrase4));


/* 
  Solution 2 - String methods and modern syntax;
*/

function countWords2(phrase) {
  if (phrase.trim().length === 0) return 0;
  return phrase.split(" ").length;
}

console.log(countWords2(testPhrase1));
console.log(countWords2(testPhrase2));
console.log(countWords2(testPhrase3));
console.log(countWords2(testPhrase4));
