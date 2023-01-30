/*
Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 
*/

/*
1. a form takes two inputs.
2. the input values are accessed by js

3. mutiply function

*/

const text = document.getElementById("text");

function multiply() {
  const input1 = document.querySelector("#num1").value;
  console.log(input1);
  const input2 = document.querySelector("#num2").value;
  let result = input1 * input2;
  text.innerHTML = `The Result Is : 
    ${result}`;
}
function divide() {
  const input1 = document.querySelector("#num1").value;
  console.log(input1);
  const input2 = document.querySelector("#num2").value;
  let result = input1 / input2;
  text.innerHTML = `The Result Is : 
    ${result}`;
}
