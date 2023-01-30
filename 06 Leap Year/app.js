const text = document.getElementById("text");

function getLeapYear() {
  var givenYear = document.getElementById("input").value;
  if (givenYear % 4 === 0 || givenYear % 400 === 0) {
    text.innerHTML = `${givenYear} is a leap year`;
  } else givenYear % 100 != 0;
  text.innerHTML = `${givenYear} is not a leap year`;
}

// check if input is a leap year in a gregorian calendar.
//

/* 
- get the leap years in a greogorian calender
    * any year divisible by 4 is a leap year
    * any year divisible by 100


 - compare the input value to the leap years in the gregorian calender
 if true - display this is a leap year
 if false - display this is not a leap year
 */
