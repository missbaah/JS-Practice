/*
Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case. Go to the editor
Fox example "Write" will be write and "PHp" will be "PHP"
*/

const switchCase = (str) => {
  var arr = str.split("");
  var upperCount = 0;
  var lowerCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      upperCount++;
    } else {
      lowerCount++;
    }

    // console.log(upperCount);
    // console.log(lowerCount);
    if (upperCount > lowerCount) {
      str.toUpperCase();
    } else {
      str.toLowerCase();
    }
    // console.log(arr.join(""));
  }
  console.log(str);
};

switchCase("Write");
