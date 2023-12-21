/* Bitwise Operations

A decimal number can be represented as a sequence of bits. To illustrate:

 6 = 0 0 0 0 0 1 1 0
23 = 0 0 0 1 0 1 1 1

From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples:

bitwiseAND(7, 12) ➞ 4
bitwiseOR(7, 12) ➞ 15
bitwiseXOR(7, 12) ➞ 11

Notes:

JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.
*/

// function bitwiseAND(n1, n2) {
//     let bitN1 = n1.toString(2).padStart(8, "0");
//     let bitN2 = n2.toString(2).padStart(8, "0");
//     let result = "";

//     for (let index = 0; index < 8; index++) {
//         result += (bitN1[index] & bitN2[index]).toString();
//     }

//     return result.split("").reduce((sum, bit, indis) => sum + Number(bit) * 2 ** (7 - indis), 0)
// }

// function bitwiseOR(n1, n2) {
//     let bitN1 = n1.toString(2).padStart(8, "0");
//     let bitN2 = n2.toString(2).padStart(8, "0");
//     let result = "";

//     for (let index = 0; index < 8; index++) {
//         result += (bitN1[index] | bitN2[index]).toString();
//     }

//     return result.split("").reduce((sum, bit, indis) => sum + Number(bit) * 2 ** (7 - indis), 0)
// }

// function bitwiseXOR(n1, n2) {
//     let bitN1 = n1.toString(2).padStart(8, "0");
//     let bitN2 = n2.toString(2).padStart(8, "0");
//     let result = "";

//     for (let index = 0; index < 8; index++) {
//         if (bitN1[index] != bitN2[index]) {
//             result += "1"
//         } else {
//             result += "0"
//         }
//     }

//     return result.split("").reduce((sum, bit, indis) => sum + Number(bit) * 2 ** (7 - indis), 0)
// }

// console.log(bitwiseAND(7, 12)) // 4
// console.log(bitwiseOR(7, 12)) // 15
// console.log(bitwiseXOR(7, 12)) // 11

/* Is it Time for Milk and Cookies?

Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples:

timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

Notes:

Dates are zero based (see resources).
All test cases contain valid dates.

*/

// function timeForMilkAndCookies(date) {
//     return (date.getMonth() == 11 && date.getDate() == 24) ? true : false;
// }

// console.log(timeForMilkAndCookies(new Date(2013, 11, 24))) // true
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23))) // false
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24))) // true

/* RegEx XIV: Group Ranges x|y

Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".

const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

Matches "blue" in "blue flag" and "red" in "red flag".

Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

Examples:

"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]
"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]
"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]

Notes:
Check the Resources tab if you get stuck.

*/

// const REGEXP = /blue flag|red flag/gi;

// console.log("red flag blue flag".match(REGEXP)); // ["red flag", "blue flag"]
// console.log("yellow flag red flag blue flag green flag".match(REGEXP)); // ["red flag", "blue flag"]
// console.log("pink flag Red flag black flag blue flag green flag red flag ".match(REGEXP)); // ["red flag", "blue flag", "red flag"])

/* Check if One Array can be Nested in Another

Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.

Examples:

canNest([1, 2, 3, 4], [0, 6]) ➞ true
canNest([3, 1], [4, 0]) ➞ true
canNest([9, 9, 8], [8, 9]) ➞ false
canNest([1, 2, 3, 4], [2, 3]) ➞ false

Notes:
Note the strict inequality (see example #3).

*/

// function canNest(arr1, arr2) {
//     return (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2));
// }

// console.log(canNest([1, 2, 3, 4], [0, 6])) // true
// console.log(canNest([3, 1], [4, 0])) // true
// console.log(canNest([9, 9, 8], [8, 9])) // false
// console.log(canNest([1, 2, 3, 4], [2, 3])) // false

/* RegEx Exercise 1: Find the Time

The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

Notes
The solution is in the Resources tab.

*/

// let sampleText = "Breakfast at 09:00 in the room 123:456.";

// let REGEXP =  /\b\d\d:\d\d\b/gm

// console.log(sampleText.match(REGEXP));