const date = document.querySelector(".date");
const time = document.querySelector(".time");

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
const day = d.getDay();

date.innerHTML = "Today is : " + weekDay[day];
time.innerHTML = "Current time is " + d.toLocaleTimeString();

console.log(date);
