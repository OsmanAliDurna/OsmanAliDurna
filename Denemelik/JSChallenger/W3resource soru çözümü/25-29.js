/* 25

Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"

*/

// const countryNames = ["Australia", "Germany", "United States of America"];

// const Longest_Country_Name = (array) => countryNames.find((eleman) => eleman.length == Math.max(...array.map((country) => country.length)))

// console.log(Longest_Country_Name(countryNames));

/* 26

Write a JavaScript function to find the longest substring in a given string without repeating characters.

*/

// const sampleText = "lşejfjnsdşgfnıognrringrefam";

// Emre nin çözümü :

// function findLongestUniqueSubstring(word) {
//     let longest = '';
//     let current = '';

//     for (let char of word) {
//         if (current.includes(char)) {
//             current = current.slice(current.indexOf(char) + 1);
//         }
//         current += char;

//         if (current.length > longest.length) {
//             longest = current;
//         }
//     }

//     return longest;
// }

// console.log(findLongestUniqueSubstring(sampleText))

// const longestUniques = (text) => {
//     let result = [];
//     let word = "";

//     for (let i = 0; i <= text.length; i++) {
//         if (i == text.length) {
//             result.push(word);
//         } else if (!(word.includes(text[i]))) {
//             word += text[i];
//         } else {
//             result.push(word);
//             word = "";
//             i = text.slice(0, i).lastIndexOf(text[i]);
//         }
//     }
//     return result.find((eleman) => eleman.length == Math.max(...result.map((word) => word.length)));
// }

// console.log(longestUniques(sampleText));

/* 27

Write a JavaScript function that returns the longest palindrome in a given string.

Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

*/



/* 28

Write a JavaScript program to pass a 'JavaScript function' as a parameter.

*/

// function addStudent(ahmet) {
//     return ahmet();
// }

// function refreshStudentList() {
//     return 'Hello';
// }

// console.log(addStudent(refreshStudentList));

/* 29

Write a JavaScript function to get the function name.

*/

// function abc() {
//     return arguments.callee.name;
// }

// console.log(abc());