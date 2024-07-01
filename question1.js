// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
const readline = require('readline-sync');
 function gradeCalc(){
    const marksInput = readline.question("Enter students grades(between 100 and 0)")

    let marks = parseFloat(marksInput);

    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79){
        grade = "B"
    } else if (marks >= 59 && marks <= 49){
        grade = "C"
    } else if (marks >= 40 && marks <= 49){
        grade = "D"
    } else{
         grade = "E"
    }

    console.log(`The student's grade is: ${grade}`);


 }

 gradeCalc();


 //npm install readline-sync