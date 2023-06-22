/*

-- Write a program to enter marks of five subjects and calculate total, average and
percentage.
 Example
Input: - Enter Marks of five subjects:
95
76
58
90
89
Output:-.Total marks = 435
 Average Marks =87
Percentage =87

*/
var sub1 = Number(prompt("Enter subject 1 : "));
var sub2 = Number(prompt("Enter subject 2 : "));
var sub3 = Number(prompt("Enter subject 3 : "));
var sub4 = Number(prompt("Enter subject 4 : "));
var sub5 = Number(prompt("Enter subject 5 : "));

var sum = sub1 + sub2 + sub3 + sub4 + sub5;
alert(`Total marks = ${sum}\nAverage marks = ${(sum / 5).toFixed(2)}\nPercentage = ${((sum / 500) * 100).toFixed(2)}`);