/* 19

Write a JavaScript function that returns array elements larger than a number.

*/

// let sampleArray = Array(10).fill(0).map((eleman, indis) => eleman + indis);
// let target = 5;

// let largerThan = (array, number) => array.filter((eleman) => eleman > number);

// console.log(largerThan(sampleArray, target));

/* 20

Write a JavaScript function that generates a string ID (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

*/

// let sampleCharacterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// let target = 12;

// let stringGenerater = (text, number) => {
//     let result = "";
//     for (let i = 0; i < number; i++) {
//         result += text[Math.floor(Math.random() * text.length)];
//     }
//     return result;
// }

// console.log(stringGenerater(sampleCharacterList, target));

/* 21

Write a JavaScript function to get all possible subsets with a fixed length (for example at least 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

*/

// 1. denememiz :

// let sampleArray = [1, 2, 3, 4, 5]; //  1 5 10 10 5 1

// let subsets = (array, number) => {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             result.push([array[i], array[j]]);
//         }
//     }

//     return result
// }

// console.log(subsets(sampleArray, 2))

// 2. denememiz :

// let sampleArray = [1, 2, 3, 4, 5]; //  1 5 10 10 5 1

// let subsets = (array, number) => {
//     let result = [];

//     for (let i = 0; i < array.length - 1 ; i++) {
//         for (let j = number; j <= array.length; j++) {
//             result.push(array.slice(i, i + j)) // 5 7 -> 5,6
//         }
//     }

//     return result
// }

// console.log(subsets(sampleArray, 2))

/* 22

Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2

*/

// let sampleArguments = "w3resource.com";
// let targetLetter = "o"

// let amount = (text, letter) => `${sampleArguments} stringinde "${targetLetter}" karakteri tam tamına ${text.split(letter).length - 1} adet bulunmaktadır.`

// console.log(amount(sampleArguments, targetLetter));

/* 23

Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'

*/

// let sampleArguments = "abacddbec";

// let unique = (text) => text.split("").find((eleman) => text.indexOf(eleman) == text.lastIndexOf(eleman))

// console.log(unique(sampleArguments))

/* 24

Write a JavaScript function to apply the Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

*/