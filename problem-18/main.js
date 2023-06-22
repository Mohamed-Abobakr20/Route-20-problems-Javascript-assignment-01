/*

-- Write a program to check whether a number is even or odd

*/
var num = Number(prompt("Enter an integer : "));

switch (true) {
    case (num % 2 === 0):
        alert("Number is even");
        break;
    default:
        alert("Number is odd");
        break;

}