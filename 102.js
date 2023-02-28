/*
Write a JavaScript program to find the number of inversions of a given array of integers. 
Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j
*/

const countInversions = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j] && i < j) {
        count++;
      }
    }
  }
  return count;
};

console.log(countInversions([3, 4, 6, 5]));
console.log(countInversions([4, 3, 6, 5]));
