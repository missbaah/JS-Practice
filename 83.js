/*

Write a JavaScript to find the longest string from a given array of strings. 
*/

function longestStr(arr) {
  let maxVal = arr[0].length;
  arr.map((item) => {
    maxVal = Math.max(maxVal, item.length);
  });

  return arr.filter((item) => item.length == maxVal);
}

console.log(longestStr(["Adwoa", "Adom", "Kwadwo"]));
