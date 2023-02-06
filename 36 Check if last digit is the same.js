/*
check whether the last digit of the three given positive integers is same.

x, y , z 

tip. check if num is greater than 0 

*/

function num(x, y, z) {
  if (x % 10 === y % 10 && z % 10 === y % 10 && x % 10 == z % 10) {
    console.log(true);
  } else {
    console.log(false);
  }
}

num(456, 26, 76);
