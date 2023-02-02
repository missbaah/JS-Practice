/*
create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1


given a string, substring(0,1) and (string.length) , (1, str.length)
*/

function newStr(str) {
  if (str.length > 1) {
    var a = str.substring(0, 1);
    var b = str.substring(str.length - 1);
    var c = str.substring(1, str.length - 1);
    const res = c + b + a;
    console.log(res);
  } else {
    console.log(str);
  }
}

newStr("Hope"); // eopH
newStr("e");
newStr("Beans"); // seanB
