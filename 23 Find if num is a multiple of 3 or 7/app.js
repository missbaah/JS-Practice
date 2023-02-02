/*
check whether a given positive number is a multiple of 3 or a multiple of 7.

if (num < 0) return this is a negative num
else if ( num % 3 == 0) return this is a multiple of 3
else ( num % 7 === 0) return this is a multiple of 7

*/

function checkMultiple(num) {
  if (num < 0) {
    console.log("this is a negative num");
  } else if (num % 3 === 0) {
    console.log(`${num} is a multiple of 3`);
  } else if (num % 7 === 0) console.log(`${num} is a multiple of 7`);
}

checkMultiple(12);
checkMultiple(-3);
checkMultiple(14);
