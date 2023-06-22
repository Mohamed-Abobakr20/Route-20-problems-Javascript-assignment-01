/*

-- Write a program to create Simple Calculator

*/
var num1 = Number(prompt("Enter an integer 1 : "));
var num2 = Number(prompt("Enter an integer 2 : "));
var choice = prompt("Enter a choice:  +  -  *  / ");

switch (choice) {
    case "+":
        alert(`${num1} + ${num2} = ${num1 + num2 }`);
        break;
    case "-":
        alert(`${num1} - ${num2} = ${num1 - num2 }`);
        break;
    case "*":
        alert(`${num1} * ${num2} = ${num1 * num2 }`);
        break;
    default:
        alert(`${num1} / ${num2} = ${num1 / num2 }`);
        break;

}