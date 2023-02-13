/*
test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
*/

const test30_40 = (nums) => {
  let a = nums[0];
  let b = nums[1];

  return (a === 30 && b === 30) || (a === 40 && b === 40);
};

console.log(test30_40([30, 40]));
console.log(test30_40([30, 30]));
console.log(test30_40([40, 40]));
