/*

--Write a program that allows user to insert integer then print all numbers between 1 to
that number
Example Input 5
Output 1, 2, 3, 4, 5

*/
var num = prompt("Enter an integer : ");
var arr = [];

for (var i = 1; i <= num; i++) {
    arr.push(i);
}

alert(arr.toString());