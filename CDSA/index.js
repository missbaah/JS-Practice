// printing even numbers
const evenNums = () => {
  num = 0;
  while (num <= 100) {
    console.log(num);
    num += 2;
  }
};

// evenNums();

// insertion in an array
const fruits = ["apples", "bananas", "cucumbers", "dates", "elderberry"];

// insertion at the end of an array
/*
fruits.push("figs");
console.log(fruits);
*/

// insertion at a specific index ( ex. 2)
// fruits.splice(2, 0, "figs"); // this insertion took 4 steps
// console.log(fruits);

// deletion at index 2
fruits.splice(2, 1);
console.log(fruits);
