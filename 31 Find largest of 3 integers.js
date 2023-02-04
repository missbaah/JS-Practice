/*
Find the largest of three given integers

1. compare if a or b is larger
 if a > b --> res > c --> greatest
2. compare result to c to find which is larger


a > b && a > c ---> a is the greatest
b > a && b > c ----> b is the greatest
c > a && c > b ------> c  is the greateest
*/

const largestNum = (a, b, c) => {
  if (a > b && a > c) {
    return `${a} is the greatest`;
  } else if (b > a && b > c) {
    return `${b} is the greatest`;
  } else {
    return `${c} is the greatest`;
  }
};

console.log(largestNum(3, 4, 5));
console.log(largestNum(54, 14, 25));
console.log(largestNum(67, 99, 5));
