/*
 Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
*/

const commonElement = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      return true;
    }
  }
  return false;
};

console.log(commonElement([3, 4, 5], [7, 8, 9]));
console.log(commonElement([2, 3, 4], [4, 8, 9]));
