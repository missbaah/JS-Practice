/*Write a JavaScript to add two positive integers without carry.*/

function add(x, y) {
  var result = 0,
    n = 1;
  while (x > 0 && y > 0) {
    result += n * ((x + y) % 10);
    x = Math.floor(x / 10);
    y = Math.floor(y / 10);
    n *= 10;
  }
  return result;
}

console.log(add(52, 65));
