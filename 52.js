/*
convert the letters of a given string in alphabetical order.

adwoa ---> aadow

basically loop through the string, covert to unicode, 
*/

function convertStr(str) {
  console.log(str.split("").sort().join(""));
}

convertStr("Adwoa");
