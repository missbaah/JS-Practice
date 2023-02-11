/*
Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

create x new string from given string with x number of copies

*/

const createNumOfStr = (x, str) => {
  if (x > 0) {
    console.log(Array(x + 1).join(str));
    // str.repeat(x)
  }
};

createNumOfStr(5, "Hello");
