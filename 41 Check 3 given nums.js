/*
check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
*/

const checkNums = (x, y, z) => {
  if (x === y && y === z && x === z) {
    return 30;
  } else if (x === y || y === z || x === z) {
    return 40;
  } else {
    return 20;
  }
};

console.log(checkNums(2, 2, 2));
console.log(checkNums(2, 2, 6));
console.log(checkNums(8, 25, 2));
