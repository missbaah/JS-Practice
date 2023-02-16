/*
Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.

x $ y = z
arr = [+,-,*,/]

*/

const replace$ = (str) => {
  const signs = ["+", "-", "*", "/"];
  const randomNum = Math.floor(Math.random() * signs.length);
  return str.replace("$", signs[randomNum]);
};

console.log(replace$("3 $ 5 = 7"));
console.log(replace$("40 $ 15 = 27"));

/*
function check_arithmetic_Expression(x, y, z) {
  return x + y == z || x * y == z || x / y == z || x - y == z;
}
*/
