/*
 check from three given integers that whether a number is greater than or equal to 20 and less than one of the others
*/

function checkNums(x, y, z) {
  return (
    (x >= 20 && (x < y || x < z)) ||
    (y >= 20 && (y < x || y < z)) ||
    (z >= 20 && (z < y || z < x))
  );
}

console.log(checkNums(21, 53, 64));
console.log(checkNums(10, 25, 164));
console.log(checkNums(5, 25, 10));
