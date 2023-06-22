/*

--Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant
Example1
Input: O
Output: vowel
Example 2
Input: b
Output:
Consonant



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