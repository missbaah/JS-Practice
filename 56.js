/*
Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas

5000/5 = 1,000
*/

function numToString(x, y) {
  const res = Math.round(x / y);
  console.log(res.toLocaleString());
}

numToString(5500, 5);
