/*

-- Write a program to print total number of days in month 

*/
var month = Number(prompt("Enter month number : "));

switch (month) {
    case 4:
    case 9:
    case 11:
        alert("Days in month: 30");
        break;
    case 2:
        alert(`Days in month: ${new Date(new Date().getFullYear(), 2, 0).getDate()}`);
        break;
    default:
        alert("Days in month: 31");
        break;
}