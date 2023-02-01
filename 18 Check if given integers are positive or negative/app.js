/*
check from two given integers, whether one is positive and another one is negative.

Math.sign() ===> checks if a number is positive or negative
*/

function checkIntegers(x, y) {
  return (
    (Math.sign(x) === -1 && Math.sign(y) === 1) ||
    (Math.sign(y) === -1 && Math.sign(x) === 1)
  );
}

console.log(checkIntegers(5, 5)); // false
console.log(checkIntegers(-5, 5)); // true
console.log(checkIntegers(5, -5)); // true
console.log(checkIntegers(-5, -5)); // false

// w3 solution
/*
function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
*/
