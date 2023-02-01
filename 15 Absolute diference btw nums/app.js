/*
compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function absDifference(a, 19){
    if( a > 19){
        const result = (a-19)* 3
        console.log(result)
    } else {
        const result = 19 - a
        console.log(result)
    }
}
*/

const b = 19;

function absDifference(a, b) {
  if (a > b) {
    const result = (a - b) * 3;
    console.log(result);
  } else {
    const result = b - a;
    console.log(result);
  }
}

absDifference(25, b);

/*
Solution By W3schools

function diff_num(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));


*/
