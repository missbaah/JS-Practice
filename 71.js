/*
check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
*/

const check1 = (arr) => {
  if (arr.length >= 1) {
    return arr[0] === 1 || arr[arr.length - 1] === 1;
  } else {
    return false;
  }
};

console.log(check1([1, 2, 4, 5, 6]));
console.log(check1([8, 2, 4, 5, 1]));
console.log(check1([8, 2, 4, 5, 6]));
