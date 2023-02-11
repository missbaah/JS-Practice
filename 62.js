/*
move last three character to the start of a given string. The string length must be greater or equal to three.
*/

const newStr = (str) => {
  if (str.length >= 3) {
    const last3 = str.substring(str.length - 3, str.length);
    const restOfStr = str.substring(0, str.length - 3);
    const res = last3 + restOfStr;
    return res;
  } else {
    return false;
  }
};

console.log(newStr("Hello"));
