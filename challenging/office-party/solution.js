/*
  Set test data
*/

let testParties1 = [
  {
    desserts: ["cookies", "brownies", "cake"],
    snacks: ["chips", "pretzels"],
    hasMusic: false
  },
  {
    desserts: ["carrot cake"],
    snacks: ["pretzels"],
    hasMusic: true
  },
  {
    desserts: ["brownies"],
    snacks: ["chips"],
    hasMusic: true
  },
  {
    desserts: ["brownies"],
    snacks: [],
    hasMusic: false
  }
];

let testParties2 = [
  {
    desserts: ["cookies", "fudge", "ice cream"],
    snacks: ["tuna fish sandwiches", "popcorn"],
    hasMusic: false
  },
  {
    desserts: ["brownies", "devil's food cake", "M&Ms", "cookies"],
    snacks: ["pretzels", "burnt popcorn"],
    hasMusic: true
  }
];

/*
  Solution 1
*/

function partiesAreFun(parties) {
  for (let i=0; i < parties.length; i++) {
    let isFun;
    if (hasSubstring(parties[i].snacks, "fish") || hasSubstring(parties[i].snacks, "burnt popcorn")) {
      isFun = false;
    } else if (hasSubstring(parties[i].desserts, "cake") && parties[i].hasMusic) {
      isFun = true;
    } else if (parties[i].desserts.length >= 3 && parties[i].snacks.length >= 2) {
      isFun = true;
    } else {
      isFun = false;
    }
    console.log(isFun);
  }
}

function hasSubstring(arr, substring) {
  for (let i=0; i < arr.length; i++) {
    if (arr[i].includes(substring)) {
      return true;
    }
  }
  return false;
}

partiesAreFun(testParties1);
partiesAreFun(testParties2);


/*
  Solution 2 - Same general logic, but modern syntax
*/

function partiesAreFun2(parties) {
  parties.forEach(party => {
    let isFun;
    if (hasSubstring2(party.snacks, "fish")) isFun = false;
    else if (hasSubstring2(party.snacks, "burnt popcorn")) isFun = false;
    else if (hasSubstring2(party.desserts, "cake") && party.hasMusic) isFun = true;
    else if (party.desserts.length >= 3 && party.snacks.length >= 2) isFun = true;
    else isFun = false;
    console.log(isFun);
  });
}

function hasSubstring2(arr, substring) {
  let found = arr.filter(str => str.includes(substring));
  return found.length > 0;
}

partiesAreFun2(testParties1);
partiesAreFun2(testParties2);
