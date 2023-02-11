/*
create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
*/

const newStr = (str) => {
  if (str.length % 2 !== 0) {
    const middle = (str.length + 1) / 2;
    return str.slice(middle - 2, middle + 1);
  } else return false;
};

console.log(newStr("Crazy"));
