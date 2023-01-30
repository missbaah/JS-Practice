// the program takes a number btw 1 - 10
// user is prompted to input a guess number.
// if it matches display , "Good Work"
// if not "Not Matched"

/*
1. Generate random number from 1 - 10
const num = Math.floor(Math.random() * 10) + 1;


--> need a button
2. Prompt the user to enter a number
let userPrompt = prompt("Guess a number from 1 -10", "")

3. check if randome number is equal to prompt, text= " Good Work", else "Not Matched " --> p text

*/

const text = document.getElementById("text");

const num = Math.floor(Math.random() * 10) + 1;
console.log(num);
const promptFunc = () => {
  let userPrompt = prompt("Guess a number from 1 -10", "");
  console.log(userPrompt);
  if (userPrompt == num) {
    text.innerHTML = "Good Work";
  } else if (userPrompt == num) {
    text.innerHTML = "Not matched";
  } else {
    alert("input a number from 1 -10");
  }
};
