/*
test whether a string end with "Script". The string length must be greater or equal to 6. 
*/

const testStr = (str) => {
  if (str.length >= 6) {
    return str.endsWith("Script");
  } else {
    false;
  }
};

console.log(testStr("JavaScript"));
console.log(testStr("Javagroup"));
