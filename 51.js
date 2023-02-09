/*
convert a given number to hours and minutes
*/

function getHoursAndMins(x) {
  const hours = Math.floor(x / 60);
  const minutes = x % 60;
  return `${hours}:${minutes}`;
}

console.log(getHoursAndMins(70));
console.log(getHoursAndMins(50));
console.log(getHoursAndMins(22));
