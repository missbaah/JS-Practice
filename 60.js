/*
create a new string without the first and last character of a given string
*/

const newStr = (str) => {
  const res = str.substring(1, str.length - 1);
  console.log(res);
};

newStr("Joker");
newStr("Caring");
