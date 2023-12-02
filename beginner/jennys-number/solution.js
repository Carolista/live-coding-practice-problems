/* 
  Solution 1
*/

let jenny = "j02en8 9nys-n1u m80b e3r!";

let digits = "";
for (let i = 1; i < jenny.length; i++) {
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
