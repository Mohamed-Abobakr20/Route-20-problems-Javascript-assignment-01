/*

-- Write a program to check whether a number is positive or negative or zero

*/
var num = Number(prompt("Enter an integer : "));

switch (true) {
    case (num < 0):
        alert("negative");
        break;
    case (num > 0):
        alert("positive");
        break;
    default:
        alert("Number is zero");
        break;

}