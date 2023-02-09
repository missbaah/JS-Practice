/*

check whether a given string contains equal number of p's and t's.
*/

const checkPandQ = (str) => {
  const p = str.match(/p/gi);
  const t = str.match(/t/gi);

  if (p.length == t.length) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPandQ("patience"));
console.log(checkPandQ("participate"));
console.log(checkPandQ("potter"));

/*
function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
         
}
*/
