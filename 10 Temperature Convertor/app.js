/*
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

const c = ((f-32)/9) * 5
const f = 9/5*c + 32

*/

const text = document.getElementById("text");

function getCelsius() {
  const input = document.querySelector("#num").value;
  const result = input - (32 / 9) * 5;
  text.innerHTML = `${input}°F is ${result}°C`;
}

function getFarenheit() {
  const input = document.querySelector("#num").value;
  const result = (9 / 5) * input + 32;
  text.innerHTML = `${input}°C is ${result}°F`;
}
