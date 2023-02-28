/*
Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.
*/

const maxNum = (num) => {
  const str = num.toString();
  const arr = str.split("");
  var max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(arr[j], max);
    }
  }
  return max;
};

console.log(maxNum(45));
console.log(maxNum(189));
