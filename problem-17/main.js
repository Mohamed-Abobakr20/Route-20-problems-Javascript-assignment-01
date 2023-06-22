/*

-- Write a program to find maximum between two numbers 

*/
var num1 = Number(prompt("Enter number 1 : "));
var num2 = Number(prompt("Enter number 2 : "));

switch (true) {
    case (num1 > num2):
        alert("number 1 is bigger than number 2");
        break;
    case (num2 > num1):
        alert("number 2 is bigger than number 1");
        break;
    default:
        alert("They are equal");
        break;

}