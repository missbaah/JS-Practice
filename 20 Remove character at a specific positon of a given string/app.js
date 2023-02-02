/*
 remove a character at the specified position of a given string and return the new string.

 str.substring()
*/

function sliceStr(str, index) {
  let result1 = str.substring(0, index);
  let result2 = str.substring(index + 1, str.length);
  console.log(result1 + result2);
}

sliceStr("hello", 2);
sliceStr("Hours", 3);
sliceStr("Power", 0);
