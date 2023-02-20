/*
Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers

// in my own words, find the result of the two elements that give a the biggest difference
*/

const maxDifference = (arr) => {
  let result = 0;
  let maxVal = 0;
  for (i = 0; i < 1; i++) {
    maxVal = Math.abs(maxVal - arr[i]);
  }
  for (i = 1; i < arr.length; i++) {
    maxVal = Math.abs(maxVal - arr[i]);
    if (maxVal > result) {
      result = maxVal;
    }
  }
  console.log(result);
};

maxDifference([6, 4, 9, 15]);
maxDifference([16, 4, 9, 15]);

/*


function max_difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}
*/
