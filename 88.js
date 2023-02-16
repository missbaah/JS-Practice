/*
Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not.
*/

function checkSimilarity(num1, num2, divisor) {
  if (
    (num1 % divisor === 0 && num2 % divisor === 0) ||
    (num1 % divisor !== 0 && num2 % divisor !== 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSimilarity(40, 50, 10));
console.log(checkSimilarity(45, 55, 10));
console.log(checkSimilarity(40, 55, 10));
