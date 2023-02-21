/*
 Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers. 
*/

const sumOfDiff = (arr) => {
  let result = 0;
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    val = arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    var diff = Math.abs(val - arr[j]);
    result += diff;
  }
  return result;
};

console.log(sumOfDiff([3, 4, 8, 6, 2]));
