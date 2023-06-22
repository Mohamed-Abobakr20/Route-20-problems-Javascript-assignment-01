/*

--Write a program that allows to user to insert number then print all even numbers
between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14

*/
var num = prompt("Enter a number : ");
var arr = [];

for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}

alert(arr.toString());