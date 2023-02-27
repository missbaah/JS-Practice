/*
Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions
*/

const latinLetters = (str) => {
  arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + arr[i + 1]).toUpperCase()) {
      return false;
    } else if ((arr[i] + arr[i + 1]).toLowerCase()) {
      return false;
    }
  }
  return true;
};

console.log(latinLetters("aDWoa"));
console.log(latinLetters("Adwoa"));
console.log(latinLetters("AdWoA"));
