/*
 Write a JavaScript program to find the number which appears most in a given array of integers.
*/

const which_appears_most = (arr) => {
  //   var count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log(arr[j]);
      }
    }
  }
  //   console.log(count);
};

which_appears_most([1, 2, 3, 2, 4, 2]);
