/*
Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
*/

const replace_nums = (arr, num, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      arr.splice(i, 1, val);
    }
  }
  return arr;
};

console.log(replace_nums([5, 4, 3, 8, 3, 1, 3], 3, 2));
