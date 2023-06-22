/*

--Write a program that take 3 integers from user then print the max element
and the min element.
Example 1
 Input:7,8,5
Output:
max element = 8
min element = 5
Example2
Input: 3 6 9
Outputs:
Max element = 9
Min element = 3


*/
var num1 = prompt("Enter an integer 1: ");
var num2 = prompt("Enter an integer 2: ");
var num3 = prompt("Enter an integer 3: ");

alert(`max element = ${Math.max(num1,num2,num3)}\nmin element = ${Math.min(num1,num2,num3)}`)