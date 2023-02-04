/*
 find a value which is nearest to 100 from two different given integer values
*/

function nearestTo100(x, y) {
  let maxVal = 100;

  if (x <= maxVal) {
    if (x > y) {
      console.log(x);
    }
  } else {
    console.log(y);
  }
  if (y <= maxVal) {
    if (y > x) {
      console.log(y);
    }
  } else {
    console.log(x);
  }

  //   if (x > y && x <= maxVal) {
  //     console.log(x);
  //   } else y > x && y <= maxVal;
  //   console.log(y);
}

nearestTo100(45, 67);
nearestTo100(98, 200);
nearestTo100(145, 88);
