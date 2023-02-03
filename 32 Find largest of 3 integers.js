/*
Find the largest of three given integers

1. compare if a or b is larger
 if a > b --> res > c --> greatest
2. compare result to c to find which is larger
*/

const largestNum = (a, b, c) => {
  if (a > b) {
    const res = a;
    return a;
  } else {
    return b;
  }
};
