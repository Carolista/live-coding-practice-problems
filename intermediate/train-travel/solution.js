/*
  Notes & clarifications

  Write function that takes array of objects
  Each object represents a train and has speed and distance values
  Return average time all trains take to reach destination

  time is distance / speed
*/


/*
  Pseudocode

  Create variable to store number (sum)
  loop over train objects
    calculate distance and add to sum
  return sum divided by length of array
  
*/


/*
  Set test data
*/

let testTrains = [
  {
    speed: 20,
    distance: 150
  },
  {
    speed: 25,
    distance: 155
  },
  {
    speed: 32,
    distance: 162
  }
];


/* 
  Solution 1
*/

function avgTrainTravelTime(trains) {
  let sum = 0;
  for (let i=0; i < trains.length; i++) {
    sum += trains[i].distance / trains[i].speed;
  }
  let avg = sum / trains.length;
  return Math.round(avg * 100) / 100;
}

console.log(avgTrainTravelTime(testTrains));


/*
Solution 2 - Advanced syntax plus helper function
*/

function avgTrainTravelTime2(trains) {
  let sum = trains.reduce((acc, train) => {
    let time = train.distance / train.speed;
    return acc + time;
  }, 0);
  return round(sum / trains.length, 2)
}

function round(num, decPlaces = 0) {
  let factor = 10 ** decPlaces;
  return Math.round(factor * num) / factor;
}

console.log(avgTrainTravelTime2(testTrains));
