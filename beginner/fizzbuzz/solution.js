/* 
  Solution 1
*/

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(16);


/*
  Solution 2 - use stringbuilding
*/

function fizzBuzz2(num) {
  for (let i = 1; i <= num; i++) {
    let fb = "";
    if (i % 3 === 0) {
      fb += "fizz";
    }
    if (i % 5 === 0) {
      fb += "buzz";
    }
    if (fb === "") {
      console.log(i);
    } else {
      console.log(fb);
    }
  }
}

// fizzBuzz2(16);


/*
  Solution 3 - More concise, modern syntax
*/ 

function fizzbuzz3(num) {
  let i = 1;
  while (i++ < num) {
    let fb = "";
    if (i % 3 === 0) fb += "fizz";
    if (i % 5 === 0) fb += "buzz";
    console.log(fb === "" ? i : fb);
  }
}

fizzbuzz3(16);
