/*
capitalize the first letter of each word of a given string
*/

const capitalize = (str) => {
  const arr = str.split(" ");
  //   return arr;
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] =
      arr[i].charAt(0).toUpperCase() + arr[i].substring(1, arr[i].length);
  }
  return arr.join(" ");
};

console.log(capitalize("hello i am a girl"));
