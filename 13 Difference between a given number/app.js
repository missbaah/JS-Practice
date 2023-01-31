/*
Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.


if num > 13 , return Math.abs(num*2)
*/

const difference = (num) => {
  let result;
  if (num <= 13) {
    result = 13 - num;
    console.log(result);
  } else num > 13;
  {
    console.log(Math.abs(13 - num) * 2);
  }
};

difference(15);
