/*
concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string
*/

const twoStr = (str1, str2) => {
  if (str1.length === str2.length) {
    return str1 + str2;
  } else {
    if (str1.length > str2.length) {
      const shorten = str1.substr(str1.length - str2.length);
      return shorten + str2;
    } else {
      const shorten = str2.substr(str2.length - str1.length);
      return str1 + shorten;
    }
  }
};

console.log(twoStr("Hello", "World"));
console.log(twoStr("Hello", "beeb"));
console.log(twoStr("crazy", "humans"));
