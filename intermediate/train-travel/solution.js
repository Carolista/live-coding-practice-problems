/* 
  Solution 1
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

function avgTrainTravelTime(trains) {
  let times = [];
  for (let i=0; i < trains.length; i++) {
    times.push(trains[i].distance / trains[i].speed);
  }
  return getAverage(times);
}

function getAverage(numArr) {
  let sum = 0;
  for (let i=0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  let avg = sum / numArr.length;
  return Math.round(avg * 100) / 100;
}

console.log(avgTrainTravelTime(testTrains));


/*
Solution 2 - Advanced syntax plus additional helper function
*/

function avgTrainTravelTime2(trains) {
  let times = trains.map(train => train.distance / train.speed);
  return getAverage2(times);
}

function getAverage2(numArr) {
  let sum = numArr.reduce((acc, num) => acc + num, 0);
  return round(sum / numArr.length, 2); 
}

function round(num, decPlaces = 0) {
  let factor = 10 ** decPlaces;
  return Math.round(factor * num) / factor;
}

console.log(avgTrainTravelTime2(testTrains));
