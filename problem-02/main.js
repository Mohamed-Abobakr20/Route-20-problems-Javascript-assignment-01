/*

--Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no
Example1
Input: 12 Output Yes
Example 2
Input: 9 Output No

*/
var number = prompt("Enter a number: ");

if (number % 3 === 0 && number % 4 === 0) {
    alert("Yes");
} else {
    alert("No");
}