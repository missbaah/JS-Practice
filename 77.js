/*
test whether an array of integers of length 2 contains 1 or a 3.
*/

const test = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    return arr[i] === 1 || arr[i] === 3;
  }
};

// tip use arr.indexOf(1) != -1

console.log(test([1, 2]));
console.log(test([2, 3]));
