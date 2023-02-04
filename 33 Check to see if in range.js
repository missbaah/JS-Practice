/*
 check whether two numbers are in range 40..60 or in the range 70..100 inclusive
*/

function checkInRange(x, y) {
  // check to see in they are in the range 40 - 60

  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    console.log("in the 40-60 range");
  } else if (x >= 70 && x <= 100 && y >= 70 && y <= 100) {
    console.log("in the 70-100 range");
  } else {
    console.log("not in either ranges");
  }
}

checkInRange(48, 56);
checkInRange(80, 95);
checkInRange(28, 120);
