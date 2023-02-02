/*
create a new string from a given string with the first character of the given string added at the front and back.


new string = substring(0, 1) + str + substring(0, 1)
*/

const newStr = (str) => {
  firstChar = str.substring(0, 1);
  const res = firstChar + str + firstChar;
  console.log(res);
};

newStr("given");
newStr("beans");
newStr("hope");
