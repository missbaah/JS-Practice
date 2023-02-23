/*
Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.
*/

const rearrange = (str1, str2) => {
  var set1 = str1.split("");
  var set2 = str2.split("");

  set1.sort();
  set2.sort();

  for (let i = 0; i < Math.max(set1.length, set2.length); i++) {
    return set1[i] === set2[i];
  }
};

console.log(rearrange("xyz", "zyx"));
console.log(rearrange("xyz", "zyp"));
