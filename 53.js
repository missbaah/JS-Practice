/*
check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string

index of b = index of a + 4

if given adorble return true, 
*/

function findChars(str) {
  if (str.includes("a") && str.includes("b")) {
    if (str.indexOf("b") === str.indexOf("a") + 4) {
      return true;
    }
  } else {
    return false;
  }
}

// w3resourse answer
/*
function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));
*/

console.log(findChars("adorble"));
console.log(findChars("adwoa"));
