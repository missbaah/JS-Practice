/*

Write a JavaScript program to find the types of a given angle.  
Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.
*/

const findAngle = (num) => {
  //   switch (num) {
  //     case num >= 0 && num < 90:
  //       console.log("this is an acute angle");
  //       break;
  //     case num === 90:
  //       console.log("this is a right angle");
  //       break;
  //     case num > 90 && num < 180:
  //       console.log("this is an obtuse angle");
  //       break;
  //     case num === 180:
  //       console.log("this is a 180 degree angle");
  //   }
  if (num >= 0 && num < 90) {
    console.log("this is an acute angle");
  } else if (num === 90) {
    console.log("this is a right angle");
  } else if (num > 90 && num < 180) {
    console.log("this is an obtuse angle");
  } else if (num === 180) {
    console.log("this is a 180 degree angle");
  }
};

findAngle(30);
findAngle(90);
findAngle(130);
findAngle(180);
