/*
check whether the first and last elements are equal of a given array of integers length 3.
*/

const checkElems = (arr) => {
  return arr[0] === arr[arr.length - 1];
};

console.log(checkElems([6, 5, 6]));
