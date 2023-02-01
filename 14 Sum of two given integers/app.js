/*
compute the sum of the two given integers. If the two values are same, then returns triple their sum.


let a;
let b;

function sum(a, b){
    if (a === b){
        const results = (a+b )* 3
        console.log(result)
    } else {
          const results = a + b
          console.log(result)
    }
}
*/

function sum(a, b) {
  if (a === b) {
    const result = (a + b) * 3;
    console.log(result);
  } else {
    const result = a + b;
    console.log(result);
  }
}

sum(2, 3);
