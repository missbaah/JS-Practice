/*
create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
*/

const newStr = (str) => {
  // checking if the length of the string is 3 and above
  if (str.length >= 3) {
    // getting last 3 characters
    const last3 = str.substring(str.length - 3, str.length);
    // console.log(last3);
    const copies = last3.repeat(4);
    console.log(copies);
  } else {
    console.log(false);
  }
};

newStr("joker");
