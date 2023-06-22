/*

-- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F


*/
var sub1 = Number(prompt("Enter subject 1 : "));
var sub2 = Number(prompt("Enter subject 2 : "));
var sub3 = Number(prompt("Enter subject 3 : "));
var sub4 = Number(prompt("Enter subject 4 : "));
var sub5 = Number(prompt("Enter subject 5 : "));

var sum = sub1 + sub2 + sub3 + sub4 + sub5;
var percentage = ((sum / 500) * 100).toFixed(2);

if (percentage >= 90) {
    alert(`Percentage >= 90%: Grad A`);
} else if (percentage >= 80) {
    alert(`Percentage >= 80%: Grad B`);
} else if (percentage >= 70) {
    alert(`Percentage >= 70%: Grad C`);
} else if (percentage >= 60) {
    alert(`Percentage >= 60%: Grad D`);
} else if (percentage >= 40) {
    alert(`Percentage >= 40%: Grad E`);
} else {
    alert(`Percentage < 40%: Grad F`);
}