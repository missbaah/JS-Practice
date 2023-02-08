/*
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 
*/

// if the str is Beebe it should return cffcf

function replaceStr(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case " ":
        break;
      case "z":
        arr[i] = "a";
        break;
      case "Z":
        arr[i] = "A";
        break;
      default:
        // note to me .fromCharCode converts unicode to alphabets
        // .charCodeAt() converts a character in a string to unicode
        arr[i] = String.fromCharCode(1 + arr[i].charCodeAt(0)); // here we are convert to chars 1 + the unicode of the str.char to give us the next alphabet;
    }

    switch (arr[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join("");
}

console.log(replaceStr("Python"));
