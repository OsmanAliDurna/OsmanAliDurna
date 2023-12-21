// arrays iterations questions (forEach, map, filter, reduce)

// ---------------------------------------------------------------------------------------------------------------------------

// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız? 

// ---------------------------------------------------------------------------------------------------------------------------

// let numbers1 = [1, 2, 3, 45, 65]

// let sum = 0;

// numbers1.forEach((value, index, arr) => sum += value);

// console.log(sum / numbers1.length);

// reduce ile çözümü :

// console.log(numbers1.reduce((sum, number) => sum + number) / numbers1.length);

// ---------------------------------------------------------------------------------------------------------------------------

// soru 2: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.

// ---------------------------------------------------------------------------------------------------------------------------

// let numbers3 = [1, 2, 3, 4, 5];

// numbers3.forEach((number) => console.log(number ** 2));

// console.log(numbers3.map((number) => number ** 2));

// ---------------------------------------------------------------------------------------------------------------------------

// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek,
// sadece çift sayıları içeren bir başka dizi oluşturun.

// ---------------------------------------------------------------------------------------------------------------------------

// let numbers4 = [1, 2, 3, 4, 5];

// const kareler = numbers4.map((number) => Number((number * number).toFixed(2)))
// const cift = kareler.filter((kare) => kare % 2 == 0)
// console.log(cift)

// const result1 = numbers4.map((number) => number ** 2).filter((number) => number % 2 === 0)
// console.log(result1);

// console.log(numbers4.map((number) => number ** 2).filter((cift) => !(cift % 2)));

// ---------------------------------------------------------------------------------------------------------------------------

// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).

// ---------------------------------------------------------------------------------------------------------------------------

// let numbers5 = [1, 2, 3, 4, 5];
// let result = [];
// numbers5.forEach(((number, i, arr) => console.log(result[i] = numbers5[(numbers5.length - 1 - i)])));

// const reversed3 = []
// numbers5.forEach((number) => console.log(reversed3.unshift(number)));

// ---------------------------------------------------------------------------------------------------------------------------

// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]

// ---------------------------------------------------------------------------------------------------------------------------

// let words = ["JavaScript", "Python", "Java", "C++"];
// console.log(words.map((lang) => lang.split("").reverse().join("")));

// ---------------------------------------------------------------------------------------------------------------------------

// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.

// ---------------------------------------------------------------------------------------------------------------------------

// let numbers6 = [1, 2, 3, 8, 21, 23, 41, 44, 53];

// console.log(numbers6.filter((number) => {
//     let result = true;

//     if (number < 2) {
//         result = false;
//     }

//     for (let index = 1; index < number / 2; index++) {
//         if (number % (index + 1) == 0) {
//             result = false;
//             break;
//         }
//     }
//     return result
// }));

// ---------------------------------------------------------------------------------------------------------------------------

// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.

// ---------------------------------------------------------------------------------------------------------------------------

// let numbers7 = [1, 2, 3, 4, 5];

// console.log(numbers.map((parametre) => parametre ** 2).filter((cift) => cift % 2 == 0).reduce((başlangıç, ikikat) => başlangıç + (2 * ikikat), 0));

// ---------------------------------------------------------------------------------------------------------------------------

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

const twoSum = function (nums, target) {
    const numMap = {}; // Değerleri ve karşılık gelen indisleri saklamak için bir nesne oluşturun

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num; // Hedefi elde etmek için gereken tamamlayıcı değeri hesaplayın

        // Eğer tamamlayıcı değer nesnede bulunuyorsa, bu, hedefi elde etmek için gerekli bir çifttir
        if (complement in numMap) {
            return [numMap[complement], i];
        }

        // Aksi takdirde, mevcut numarayı ve indisini nesneye kaydedin
        numMap[num] = i;
    }

    // Eğer çözüm bulunamazsa, boş bir dizi döndürün veya bir hata fırlatın
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 5));

// ---------------------------------------------------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5];

// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız? 
// soru 2: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.
// soru 3: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek,
// sadece çift sayıları içeren bir başka dizi oluşturun.
// soru 4: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
// soru 5: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]
// soru 6: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.
// soru 7: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.

// console.log(numbers.map((parametre) => parametre ** 2));
// console.log(numbers.map((parametre) => parametre ** 2).filter((cift) => cift % 2 == 0));
// console.log(numbers.map((parametre) => parametre ** 2).filter((cift) => cift % 2 == 0).reduce((başlangıç, ikikat) => başlangıç + (2 * ikikat), 0));

// let sum = 0
// numbers.filter((parametre) => parametre % 2 == 0).map((parametre) => parametre ** 2).map((i) => sum += 2 * i);
// console.log(sum);

// console.log(numbers.map((eleman, indis, array) => eleman % 2 == 0 ? eleman ** 2 : array.splice(array.indexOf(eleman), 1)));