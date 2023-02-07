/*
check two given integer values and return true if one of the number is 15 or if their sum or difference is 15
*/

function checkInteger(x, y) {
  return x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15;
}

console.log(checkInteger(15, 25));
console.log(checkInteger(5, 10));
console.log(checkInteger(19, 4));
