/*
 check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.



*/

function checkRange(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRange(45, 60, 78));
console.log(checkRange(25, 15, 78));
console.log(checkRange(25, 15, 18));
