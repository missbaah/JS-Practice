/*
 Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
*/

const rotateLeft = (arr) => {
  return [arr[1], arr[2], arr[0]];
};

console.log(rotateLeft([4, 5, 6]));
