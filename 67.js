/*
create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.  
*/

const newStr = (str) => {
  if (str.charAt(0) === "P" || str.charAt(str.length - 1) === "P") {
    return str.substring(1, str.length - 1);
  } else {
    return str;
  }
};

console.log(newStr("Pupper"));
console.log(newStr("Crown"));
console.log(newStr("UsurP"));
