/* 
  Solution 1 (this is clunky but it works)
*/

let testPhrase1 = "One giant leap for mankind";
let testPhrase2 = "a";
let testPhrase3 = "";
let testPhrase4 = "   ";

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
