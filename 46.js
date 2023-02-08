/*
check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

if x % 7 === 0|| x % 11 === 0
*/

const checkNum = (x, y) => {
  if (!((x % 7 === 0 || x % 11 === 0) && (y % 7 === 0 || y % 11 === 0))) {
    return x % 7 === 0 || x % 11 === 0 || y % 7 === 0 || y % 11 === 0;
  } else {
    return false;
  }
};

console.log(checkNum(14, 5));
console.log(checkNum(14, 21));
