/*
 Write a JavaScript program to add two digits of a given positive integer of length two.
*/

function add(x) {
  return (x % 10) + Math.floor(x / 10);
}

console.log(add(45));
