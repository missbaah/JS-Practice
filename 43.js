/*
check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
*/

const sameRightMost = (x, y, z) => {
  if (x % 10 === y % 10 && y % 10 === z % 10) {
    console.log(true);
  } else if (x % 10 === y % 10 || y % 10 === z % 10 || x % 10 === z % 10) {
    console.log(true);
  } else {
    console.log(false);
  }
};

sameRightMost(67, 97, 117);
sameRightMost(67, 80, 117);
sameRightMost(67, 80, 116);
