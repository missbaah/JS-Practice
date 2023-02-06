/*
create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
*/

function createStr(str) {
  if (str.length > 3) {
    const newStr =
      str.substring(0, 3).toLowerCase() + str.substring(3, str.length);
    console.log(newStr);
  } else {
    const newStr = str.toUpperCase();
    console.log(newStr);
  }
}

createStr("xyz");
createStr("CRAZY");
createStr("PYTHON");
