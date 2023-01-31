/*  Write a JavaScript program to get the website URL (loading page)

The location object contains information about the current URL.

DOMContentLoaded
*/

document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");
  const url = window.location.href;
  text.innerHTML = `the url of the site is ${url}`;
});
