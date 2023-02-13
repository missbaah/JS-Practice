/*
swap the first and last elements of a given array of integers. The array length should be at least 1. 
*/

const swapElem = (arr) => {
  if (arr.length > 0) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    arr[0] = last;
    arr[arr.length - 1] = first;
    console.log(arr);
  }
};

swapElem([7, 5, 3, 9]);
swapElem([5, 8, 3, 2]);
