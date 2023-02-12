/*
create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.  
*/
const newStr = (str, n) => {
  if (str.length >= n) {
    const firstChar = str.slice(0, n);
    const lastChars = str.substring(str.length - n);
    console.log(firstChar + lastChars);
    // const chars =
  } else {
    console.log(`${str}'s length is shorter than ${n}`);
  }
};

newStr("Adwoa", 3);
newStr("JavaScript", 4);
newStr("Up", 3);
