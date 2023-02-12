/*
 find the larger value between the first or last and set all the other elements with that value. Display the new array.
*/

const largerVal = (arr) => {
  if (arr[0] > arr[arr.length - 1]) {
    const greaterNum = arr[0];
    arr[0] = greaterNum;
    arr[1] = greaterNum;
    arr[2] = greaterNum;
    return arr;
  } else if (arr[0] < arr[arr.length - 1]) {
    const greaterNum = arr[arr.length - 1];
    arr[0] = greaterNum;
    arr[1] = greaterNum;
    arr[2] = greaterNum;
    return arr;
  }
};

console.log(largerVal([1, 2, 3]));
