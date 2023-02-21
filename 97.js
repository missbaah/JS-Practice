/*
 Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.
*/

const makePalindrome = (str) => {
  let flag; // indicates true or false
  for (let a = str.length; ; a++) {
    flag = true;
    for (let b = 0; b < a - b - 1; b++) {
      if (a - b - 1 < str.length && str[a - b - 1] !== str[b]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var b = str.length; b < a; b++) {
        return str + str[a - b - 1];
      }
    }
  }
};

console.log(makePalindrome("carr"));
console.log(makePalindrome("abcddc"));
console.log(makePalindrome("122"));
