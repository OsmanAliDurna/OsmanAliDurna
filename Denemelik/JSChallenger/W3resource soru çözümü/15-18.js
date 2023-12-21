/* 15

Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.

*/

// let üssü = (taban, üs) => {
//     return taban ** üs
// }

// let b = Number(prompt("Üssünün alınmasını istediğiniz değeri giriniz : "));

// let n = Number(prompt("Girdiğiniz değerin kaç üssünün alınmasını istediğinizi giriniz : "));

// document.write(üssü(b, n));

/* 16

Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"

*/

// let exampleString = "thequickbrownfoxjumpsoverthelazydog";
// let expectedOutput = "thequickbrownfxjmpsvlazydg";

// let findUniques = (text) => {
//     let result = "";
//     for (let i = 0; i < text.length; i++) {
//         if (!(result.includes(text[i]))) {
//             result += text[i];
//         }
//     }
//     return result;
// }

// document.write(findUniques(exampleString));
// document.write("<br>");
// document.write(findUniques(exampleString) === expectedOutput);

/* 17

Write a JavaScript function to get the number of occurrences of each letter in a specified string.

*/

// let exampleString = "thequickbrownfoxjumpsoverthelazydog";

// let frequences = (text) => {
//     let result = {};

//     for (let i = 0; i < text.length; i++) {
//         if (Object.keys(result).includes(text[i])) {
//             result[text[i]] += 1
//         } else {
//             result[text[i]] = 1;
//         }
//     }
//     return result;
// }

// console.log(frequences(exampleString))
// document.write(JSON.stringify(frequences(exampleString)));

/* 18

Write a function for searching JavaScript arrays with binary searches.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

*/

// let numbers = [];

// while (numbers.length < 50) {
//     let newNumber = Math.floor(Math.random() * 100);
//     if (!numbers.includes(newNumber)) {
//         numbers.push(newNumber)
//     }
// }

// let binarySearch = (array, aranan) => {
//     let sorted = array.sort((a, b) => a - b);

//     let first = 0;
//     let last = sorted.length - 1;

//     for (let i = 0; i < sorted.length; i++) {
//         let guess = Math.floor((first + last) / 2);
//         console.log(`${i+1}. tahminim : ${sorted[guess]}`);
//         if (aranan == sorted[guess]) {
//             return sorted[guess];
//         } else if (aranan < sorted[guess]) {
//             last = guess - 1;
//         } else {
//             first = guess + 1;
//         }
//     }
//     return "Öyle bir eleman yok.";
// }

// console.log(binarySearch(numbers, numbers[4]));