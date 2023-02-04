/*
check whether a specified character exists within the 2nd to 4th position in a given string

2nd position --> index 1   , 4th position ----> index 3
str.subtring(1,4) = chars needed.
res.contains("specificied character")
*/

const checkString = (str, char) => {
  const chars = str.substring(1, 4);
  //   console.log(chars);
  if (chars.includes(char)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkString("lying", "i"));
console.log(checkString("simple", "p"));
console.log(checkString("simple", "m"));
// console.log(checkString("lying", "yin"));
