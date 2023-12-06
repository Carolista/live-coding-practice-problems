/*
  Notes & clarifications

  No need for function
  Keep numeric characters only
  Multiply by 3, subtract 100
  Final result should have a hyphen after third digit
*/


/*
  Pseudocode

  Create variable to hold new empty string
  loop through string
    if current character is a number and not a blank
      add to new string
  Take new string and convert to a number
  Multiply by 3 and subtract 100
  Convert back to string
  Take slice of first three and concatenate with hyphen and remaining chars
*/


/*
  Set test data
*/

let jenny = "j02en8 9nys-n1u m80b e3r!";


/* 
  Solution 1
*/

let digits = "";
for (let i = 0; i < jenny.length; i++) {
  if (!isNaN(jenny[i]) && jenny[i] !== " ") {
    digits += jenny[i];
  }
}
let calc = String(Number(digits) * 3 - 100);
let result = calc.slice(0, 3) + "-" + calc.slice(3);

console.log(result);


/*
  Solution 2 - More concise... but perhaps less readable?
*/

let digitsOnly = jenny.split("").filter(char => !isNaN(parseInt(char))).join("");
let newNum = String(Number(digitsOnly) * 3 - 100);
let hyphenated = `${newNum.slice(0, 3)}-${newNum.slice(3)}`;

console.log(hyphenated);
