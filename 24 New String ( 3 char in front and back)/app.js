/*
create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.



*/

function newStr(str) {
  if (str.length >= 3) {
    const last3Chars = str.substring(str.length - 3, str.length);
    const res = last3Chars + str + last3Chars;
    console.log(res);
  } else {
    console.log(str);
  }
}

newStr("Crazy");
newStr("Building");
newStr("Jumping");
newStr("Sh");
