/*
check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

1. A+ if the marks >=90 && marks <=100 and is final-exams 
2. total marks >= 90;
3. return true if student gets A+, else false
*/

const checkTotalMarks = (marks, exams) => {
  if (exams === "Final-exams") {
    if (marks >= 90 && marks <= 100) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Not final exams";
  }
};

console.log(checkTotalMarks(97, "Final-exams"));
console.log(checkTotalMarks(54, "Test-exams"));
console.log(checkTotalMarks(92, "Final-exams"));
