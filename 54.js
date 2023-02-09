/*
 to count the number of vowels in a given string

 use RegX to get the vowels and if 
 /[aeiouy]+/i 
*/

function countVowels(str) {
  const vowels = /[aeiou]/gi;
  const vowelsInStr = str.match(vowels);
  console.log(vowelsInStr.length);
}

countVowels("adwoa");
countVowels("Hello I am Beebs"); // 6

/*

w3resourse solution
function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}
*/
