/*
Write a JavaScript program to find the kth greatest element of a given array of integers

if k = 4 , find the 4th greatest element
*/

function kth_greatest_element(arr, k) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr[k - 1];
}

console.log(kth_greatest_element([10, 40, 8, 2], 4));
console.log(kth_greatest_element([100, 45, 80, 2], 2));
console.log(kth_greatest_element([1, 2, 6, 4, 5], 3));
