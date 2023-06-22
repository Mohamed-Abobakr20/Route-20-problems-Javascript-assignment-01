/*

--Write a program to input month number and print number of days in that
month.
Example:
Input: - Month Number: 1
 Output:-. Days in Month: 31
*/
var month = Number(prompt("Enter month number : "));
var year = 2023;

alert(`Days in Month: ${new Date(year, month, 0).getDate()}`)