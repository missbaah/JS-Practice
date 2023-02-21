/*
 Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

[4,5,6,7], 2 the sum of 6+7=13
*/

const findSum = (arr, num) => {
  let maxVal = 0;
  for (let i = num; i < arr.length; i++) {
    maxVal += arr[i];
  }
  return maxVal;
  //   console.log(arr);
};

console.log(findSum([12, 32, 5, 75, 14], 3));

/*

function array_max_consecutive_sum(nums, k) {
  let result = 0;
  let temp_sum = 0;
  for (var i = 0; i < k - 1; i++) {
     temp_sum += nums[i];
  }
   for (var i = k - 1; i < nums.length; i++) {
   temp_sum += nums[i];
 if (temp_sum > result) {
    result = temp_sum;
   }
temp_sum -= nums[i - k + 1];
 }
 return result;
}
*/
