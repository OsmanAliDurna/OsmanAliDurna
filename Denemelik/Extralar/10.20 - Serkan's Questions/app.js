// Arrays in JS

// ismindeki harf sayisi 5 ten fazla olan isimlerin olduğu çıktıyı veren bir Array yazınız

// Çözümü :

// const isimler = ["Alice", "Bob", "Charlie", "David", "Eve"];
// let result = [];
// let fazla5den = (arr) => {
//     for (const isim of arr) {
//         isim.length > 5 && result.push(isim);
//     }
//     return result
// }
// console.log(fazla5den(isimler));

// filter ile çözümü :

// const isimler = ["Alice", "Bob", "Charlie", "David", "Eve"];
// let result = [];
// console.log(isimler.filter((isim) => isim.length > 5));

// Tek sayıların karesini
// Çift sayıların küpünü  ayrı ayrı arrayler olarak çıktı veren fonksiyonu yazınız

// Çözümü : 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let tekler = [];
// let ciftler = [];

// let karelerKüpler = (arr) => {
//     for (const index in arr) {
//         if (arr[index] % 2 == 1) {
//             tekler.push(arr[index] ** 2);
//         } else {
//             ciftler.push(arr[index] ** 3);
//         }
//     }
//     return `Tekler => ${tekler} ve Çiftler => ${ciftler}`
// }

// console.log(karelerKüpler(numbers));

// map ile çözümü :

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let tekler = [];
// let ciftler = [];
// numbers.map((number) => number % 2 ? tekler.push(number ** 2) : ciftler.push(number ** 3));
// console.log(`Tekler => ${tekler} ve Çiftler => ${ciftler}`);

//  Given an array of strings containing names, filter out the names that start with the letter "A."
//  Given an array of numbers, remove duplicate values using `filter` to create a new array with unique values

// Çözümü :

// const names = ["Ali", "amy", "Danny", "Jenny", "penny", "anthony"]
// const values = [1, 2, 3, 2, "kalem", "silgi", "kalem", 2, 3]

// let startA = (arr) => {
//     let result = [];
//     for (const name of arr) {
//         name.toLowerCase().startsWith("a") && result.push(name);
//     }
//     return result;
// }

// console.log(startA(names));

// let unique = (arr) => {
//     let result = [];
//     for (const value of arr) {
//         !result.includes(value) && result.push(value)
//     }
//     return result;
// }

// console.log(unique(values));

// filter ile çözümü :

// const names = ["Ali", "amy", "Danny", "Jenny", "penny", "anthony"]
// const values = [1, 2, 3, 2, "kalem", "silgi", "kalem", 2, 3]

// console.log(names.filter((name) => name.toLowerCase().startsWith("a")));
// console.log(values.filter((value, index, arr) => arr.indexOf(value) == index));

// Given an array of numbers, use `forEach` to calculate the sum of the squares of each number

// Çözümü :

// const numbers2 = [1, 2, 3, 5, 10];

// let sum = 0;
// numbers2.forEach((number) => sum += number);

// console.log(sum);

// reduce ile çözümü:

// console.log(numbers2.reduce((acc, number) => acc + number));