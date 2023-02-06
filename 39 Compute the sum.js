/*
compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

const sumOfIntegers = (x, y) => {
  const sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
};

console.log(sumOfIntegers(40, 30));
console.log(sumOfIntegers(20, 30));
console.log(sumOfIntegers(25, 30));
console.log(sumOfIntegers(4, 5));
