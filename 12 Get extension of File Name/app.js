/*
Write a JavaScript exercise to get the extension of a filename

-- get the file name.
- determine the extension
- console.log the extension
*/

const getFileExe = (filename) => {
  const exeName = filename.split(".").pop();
  console.log(exeName);
};

getFileExe("app.js");
getFileExe("index.html");
getFileExe("app.css");
