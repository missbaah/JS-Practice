/*
Write a JavaScript program to reverse a given string.
*/

const reverseStr = (str) => {
  const newStr = str.split("").reverse().join("");
  console.log(newStr);
};

reverseStr("hello");
