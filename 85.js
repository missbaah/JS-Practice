/*
 Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two. 
*/

// i%2 === 0

const twoArrays = (arr) => {
  var newArr = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      newArr[1] += arr[i];
    } else newArr[0] += arr[i];
  }
  return newArr;
};

console.log(twoArrays([4, 5, 6, 7]));
