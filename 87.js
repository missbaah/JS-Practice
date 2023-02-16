/*
Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements. 

--- solution ---
[1,2]  [5,6] check if similar. we can get a from b, by swappin at most one pair of elements
*/

function checkIfSimilar(x, y) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      return x[i] === y[j];
    }
  }
}

/*
function array_checking(arra1, arra2) {

  for(var i = 0; i < arra1.length; i++) {
    for(var j = i; j < arra1.length; j++) {
      var result = true,
        temp = arra1[i];
      arra1[i] = arra1[j];
      arra1[j] = temp;
      for(var k = 0; k < arra1.length; k++) {
        if(arra1[k] !== arra2[k]) {
          result = false;
          break;
        }
      }
      if(result) {
        return true;
      }
      arra1[j] = arra1[i];
      arra1[i] = temp;
    }
  }
  return false;
}
*/

console.log(checkIfSimilar([1, 2], [1, 2]));
console.log(checkIfSimilar([2, 2], [1, 2]));
