// let areAnagrams = (text1, text2) => {
//   text1 = text1.split(" ").join("").toLowerCase();
//   text2 = text2.split(" ").join("").toLowerCase();
//   let result = true;

//   if (text1.length == text2.length) {
//     for (let index = 0; index < text1.length; index++) {
//       text2.includes(text1[index]) ? null : (result = false);
//     }
//   } else {
//     result = false;
//   }
//   return result;
// };

// let areAnagrams = (text1, text2) =>
//   text1.toLowerCase().replaceAll(" ", "").split("").sort().join() ==
//   text2.toLowerCase().replaceAll(" ", "").split("").sort().join();

// console.log(areAnagrams("listen", "silent")); // Should print true
// console.log(areAnagrams("triangle", "integral")); // Should print true
// console.log(areAnagrams("debit card", "bad credit")); // Should print true
// console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
// console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
// console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true
// console.log("-----");
// console.log(areAnagrams("hello", "world")); // Should print false
// console.log(areAnagrams("apple", "banana")); // Should print false
// console.log(areAnagrams("hello", "holla")); // Should print false
// console.log(areAnagrams("race", "racing")); // Should print false

// TW-04 2. Js Sorusu:

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = (array) => {
//   let result = [];
//   for (let index = 0; index < array.length; index++) {
//     result.includes(array[index]) ? null : result.push(array[index]);
//   }
//   return result;
// };

// console.log(uniqueArray(arrayWithDuplicates));

// TW-04 3. Js Sorusu:

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 3, 4];

// const findIntersection = (arr1, arr2) => {
//   let result = [];
//   for (let index = 0; index < arr1.length; index++) {
//     arr2.includes(arr1[index]) ? result.push(arr1[index]) : null;
//   }
//   return result;
// };

// const result = findIntersection(array1, array2);
// console.log(result);