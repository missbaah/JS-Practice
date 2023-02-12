/*
display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const cityName = (str) => {
  if (str.slice(0, 3) === "Los" || str.slice(0, 3) === "New") {
    console.log(str);
  } else {
    console.log(" ");
  }
};

cityName("Los Angelos");
cityName("New York");
cityName("Accra");
