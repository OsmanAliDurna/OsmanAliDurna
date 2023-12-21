//1

let firstName = "Osman Ali";
let lastName = "Durna";
let country = "Deutschland";
let city = "Erfurt";
let age = 33.3;
let isMarried = true;
let year = 2023;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

//2

console.log(10 == "10");
console.log(10 === "10");
console.log(typeof 10 === typeof "10");

//3

console.log(parseInt("9.8") == 10);

//4

console.log(Boolean("Ali"));
console.log(Boolean(33.3));
console.log(Boolean(12 !== "12"));

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(11 != "11"));

//5

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false
console.log("python".length != "jargon".length); // true

//6

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
console.log(!("dragon".includes("on") && "python".includes("on"))); // false

//7

let now = new Date();

console.log(now.getFullYear()); // Bugünün yılı
console.log(now.getMonth() + 1); // Bugünün ay numarası (getMonth() 0 tabanlıdır)
console.log(now.getDate()); // Bugünün tarihi
console.log(now.getDay()); // Bugünün hafta numarası
console.log(now.getHours()); // Şu anki saat
console.log(now.getMinutes()); // Şu anki dakika
console.log(Math.floor(now.getTime() / 1000)); // 1 Ocak 1970'ten şu ana kadar geçen saniye sayısı