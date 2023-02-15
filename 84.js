/*
Write a JavaScript to replace each character of a given string by the next one in the English alphabet. Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
*/

function replace(str) {
  var all_chars = str.split("");
  for (var i = 0; i < all_chars.length; i++) {
    var n = all_chars[i].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    all_chars[i] = String.fromCharCode(n + "a".charCodeAt());
  }
  return all_chars.join("");
}

console.log(replace("adwoa"));
