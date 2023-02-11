/*
 concatenate two strings except their first character. 
*/

const concate = (str1, str2) => {
  const sub1 = str1.substring(1, str1.length);
  const sub2 = str2.substring(1, str2.length);
  const newStr = sub1 + sub2;
  console.log(newStr);
};

concate("hello", "world");
