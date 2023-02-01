/*
check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkFor50(a, b){
 if( a === 50 || b === 50){
    console.log(true)
 } else if ( a + b === 50){
    console.log(true)
 } else {
    console.log(false)
 }
}
*/

function checkFor50(a, b) {
  if (a === 50 || b === 50) {
    console.log(true);
  } else if (a + b === 50) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkFor50(25, 50);
checkFor50(25, 25);
checkFor50(25, 15);

/* w3 solution

function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}

*/
