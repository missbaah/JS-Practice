/*
check whether three given numbers are increasing in strict mode or in soft mode.  Go to the editor
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
*/

function increasingNums(x, y, z) {
  if (x < y && y < z) {
    console.log("strict mode");
  } else {
    console.log("soft mode");
  }
}

increasingNums(3, 5, 8);
increasingNums(3, 2, 6);
