/*

-- Write a program that allows user to insert integer then print a multiplication table up to 12.
Example
Input: 5
Outputs:
5 10 15 20 25 30 35 40 45 50 55 60

*/
var num = prompt("Enter an integer : ");
var arr = [];

for (var i = 1; i <= 12; i++) {
    arr.push(i * num);
}

alert(arr.toString());