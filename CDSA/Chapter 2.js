// Linear Search in an ordered array

function linerSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    } else if (arr[i] > value) {
      return "not found";
    }
  }
}

// console.log(linerSearch([12, 14, 16, 17], 16));
// console.log(linerSearch([12, 14, 16, 17], 6));

// Binary Search in an ordered array

function binarySearch(arr, value) {
  let upperBound = 0;
  let lowerBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    let midpoint = Math.round((upperBound + lowerBound) / 2);

    midPointValue = arr[midpoint];

    if (value === midPointValue) {
      return midpoint;
    } else if (value < midPointValue) {
      upperBound = midpoint - 1;
    } else if (value > midPointValue) {
      lowerBound = midpoint + 1;
    }
  }
}

console.log(binarySearch([1, 3, 5, 6, 7, 8, 9], 8));
