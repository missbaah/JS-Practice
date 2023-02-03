/*
 check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.


*/

const checkRange = (x, y) => {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkRange(3, 70));
