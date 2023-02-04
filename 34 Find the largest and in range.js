/*
find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

1. check if numbers are in range
2. check which one is the larger num

Tip account for if nums are the same
 */

const findLargerNum = (x, y) => {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    if (x === y) {
      console.log("numbers are the same");
    } else if (x > y) {
      console.log(x + " is greater");
    } else {
      console.log(y + " is greater");
    }
  } else {
    console.log("not in range");
  }
};

findLargerNum(4, 6);
findLargerNum(49, 55);
findLargerNum(59, 45);
findLargerNum(45, 45);
