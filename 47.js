/*
check whether a given number is presents in the range 40..10000.  Go to the editor
For example 40 presents in 40 and 4000
*/

const checkNum = (x, y, z) => {
  if (x >= y && x <= z) {
    return true;
  } else return false;
};

console.log(checkNum(45, 40, 40000));
console.log(checkNum(24, 4000, 45));
