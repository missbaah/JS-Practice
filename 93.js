/*
Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
*/

const maxDifference = (arr) => {
  let maxVal = 0;
  // looping through the arr
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k != i && k < arr.length; k++) {
      var diff = Math.abs(arr[i] - arr[k]);
      maxVal = Math.max(maxVal, diff);
    }
  }
  console.log(maxVal);
};

maxDifference([1, 2, 3, 8, 9]);
