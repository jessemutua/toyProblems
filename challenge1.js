//Write a function that prompts the user to input student marks.
// The input should be between 0 and 100. 
//The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

//declaring a variable marks
let marks;

//determining grade.
function grade() {
    //assign marks a value.
    marks = parseInt(Grade.txnum.value);
    //Determine grade
    if (marks >= 79 && marks <= 100) {
        alert("Your Grade is: A")
    } else if (marks >= 60 && marks <= 78) {
        alert("Your Grade is: B")
    } else if (marks >= 49 && marks <= 59) {
        alert("Your Grade is: C")
    } else if (marks >= 40 && marks <= 49) {
        alert("Your Grade is: D")
    } else if (marks >= 0 && marks <= 39) {
        alert("Your Grade is: E")
    } else if (marks > 100) {
        alert("Please input a valid value")
    }

};