/*

 extract the first half of a string of even length
*/

const newStr = (str) => {
  if (str.length % 2 === 0) {
    const firstHalf = str.substring(0, str.length / 2);
    console.log(firstHalf);
  }
};

newStr("food");
newStr("JavaScript");
newStr("HI");
