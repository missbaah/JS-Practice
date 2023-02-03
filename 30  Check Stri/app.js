/*
check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one. 

1. check if "script" is at index 4 in a string
2. if true , return the string without script 4, 9
3. otherwise return original string
*/

function checkString(str) {
  const script = str.substring(4, 10);
  if (script === "Script") {
    const a = str.substring(0, 4);
    const b = str.substring(10, str.length);
    console.log(a + b);
  } else {
    console.log(str);
  }
}

checkString("AdwoScripta");
checkString("Johnson");
checkString("HorsScriptes");
