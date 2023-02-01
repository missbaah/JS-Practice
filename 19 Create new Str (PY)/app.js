/*
create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.


if ( given string.includes("Py") return given string 
else ( return given string + Py in front)


*/

const createStr = (str) => {
  if (str.substring(0, 2) == "Py") {
    console.log(str);
  } else {
    console.log("Py" + str);
  }
};

createStr("Pyton");
createStr("beebs");
createStr("adom");
createStr("Pyiety");
