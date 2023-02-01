/*
 check whether a given integer is within 20 of 100 or 400

 steps 
 if ( a ==20/100)
const a = 20/100
aStr = a.toString()
*/

// const a = 20 / 100;
// const b = 400;
// aStr = a.toString();
// bStr = b.toString();

// function findInterger(x) {
//   if (aStr.includes(x) || bStr.includes(x)) {
//     return true;
//   }
// }

// console.log(findInterger("5"));

// w3 solution

function testhundred(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}
