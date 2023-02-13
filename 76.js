/*
create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1. 
*/

const newArr = (arr) => {
  if (arr.length > 0) {
    const arr1 = [arr[0], arr[arr.length - 1]];
    return arr1;
  } else {
    return "array length is less than 1";
  }
};

console.log(newArr([4, 6, 8]));
console.log(newArr([]));
