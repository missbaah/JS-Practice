/*
1st January is being a Sunday btw 2014 and 2050


find all the years between 2014 to 2050
 

check if 1st January is a sunday (0)
*/

const text = document.getElementById("text");

for (let year = 2014; year <= 2050; year++) {
  let date = new Date(`${year}-01-01`);
  let sunday = date.toString().includes("Sun") === true;
  if (sunday) {
    // console.log(date);
    text.innerHTML = `1st January is being a Sunday ${date.getFullYear()}`; // why does it print only one of the statements to the entire statement
    console.log(`1st January is being a Sunday ${date.getFullYear()}`);
  }
}
