/*
check from two given integers whether one of them is 8 or their sum or difference is 8
*/

const checkInteger = (x, y) => {
  if (x === 8 || y === 8) {
    return true;
  } else if (Math.abs(x - y) === 8) {
    return true;
  } else if (x + y === 8) {
    return true;
  } else {
    return false;
  }
};

console.log(checkInteger(4, 8));
console.log(checkInteger(2, 6));
console.log(checkInteger(12, 4));
console.log(checkInteger(8, 8));
console.log(checkInteger(16, 16));
