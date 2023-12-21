/* Write a function that takes an array and a target number as input, and returns of the indices of two numbers within the array that add up to the target number. If no such numbers exist, the function should return null.

For example:
Input array: [1, 2, 3, 4, 5]
Target number: 9

In this case, the function should return [3, 4], because 4 + 5 = 9 and these numbers are at the 3rd and 4th indices in the array.
*/

// let input = [1, 2, 3, 4, 5];
// let target = 9;

// let input2 = [2, 5, 9, 4, 3, 6];
// let target2 = 8;

// let result = [];

// Klasik for döngüsü ile çözüm : 

// for (let i = 0; i < input.length; i++) {
//     let number1 = input[i];
//     let number2 = target - number1;
//     for (let j = i + 1; j < input.length; j++) {
//         if (number2 == input[j]) {
//             result.push(i, j)
//             break;
//         }
//     }
//     if (result != []) {
//         break;
//     }
// }

// console.log(result)

// Fonksiyon ile çözümü :

// function indices2(array, target) {

//     for (let i = 0; i < array.length; i++) {

//         let number1 = array[i];
//         let number2 = target - number1;

//         for (let j = i + 1; j < array.length; j++) {
//             if (number2 == array[j]) {
//                 result.push(i, j)
//                 return result;
//             }
//         }
//     }
//     return null;
// }

// console.log(indices2(input, target));
// console.log(indices2(input2, target2));

// includes çözümü :

// function indices2(array, target) {

//     for (let indis in array) {

//         let number1 = array[indis];
//         let number2 = target - number1;

//         if (array.includes(number2)) {
//             return [array.indexOf(number1), array.indexOf(number2)];
//         }

//     }
//     return null;
// }

// console.log(indices2(input, target));    // 12345 -> 3,4
// console.log(indices2(input2, target2)); // 259436 -> 0,5

// reduce le çözümü : 

// console.log(input.reduce((acc, eleman, index, array) => acc = ((acc == null) && array.includes(target - eleman)) ? [index, array.indexOf(target - eleman)] : acc, null))

let input = [1, 2, 3, 4, 5];

const findTargetParts = (array, targetNumber) => {
    return array.reduce((sum, item, indis, array) => {
        let rest = targetNumber - item;
        if (rest == item) {
            return sum;
        }

        let otherRest = array.filter((item) => item == rest);

        if (otherRest.length) {
            if (!sum) {
                sum = [];
                sum.push(array.indexOf(...otherRest));
            } else {
                sum.push(array.indexOf(...otherRest));
            }
        }

        return sum;
    }, null);
};

const numbers = [2, 5, 9, 4, 3, 6];
console.log(findTargetParts(input, 9));
console.log(findTargetParts(numbers, 8));

// console.log(Boolean(0));
// console.log(Boolean([]));
// console.log([] == []);