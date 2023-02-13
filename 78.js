/*
test whether an array of integers of length 2 does not contain 1 or a 3.
*/

const testArr = (arr) => {
  if (arr.indexOf(1) == -1 && arr.indexOf(3) == -1) {
    return true;
  } else {
    return false;
  }
};

console.log(testArr([1, 2]));
console.log(testArr([6, 2]));
