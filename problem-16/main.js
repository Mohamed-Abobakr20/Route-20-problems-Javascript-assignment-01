/*

-- Write a program to check whether an alphabet is vowel or consonant 

*/
var char = prompt("Enter a character : ");

switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        alert("vowel");
        break;
    default:
        alert("consonant");
        break;
}