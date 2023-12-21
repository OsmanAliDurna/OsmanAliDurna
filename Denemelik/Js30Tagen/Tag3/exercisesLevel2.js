//1
/*
let [base, height] = prompt(
  "Lütfen üçgenin taban ve yükseklik değerlerini aralarında bir boşluk olacak şekilde giriniz :"
).split(" ");

console.log(
  `Girilen değerlerdeki üçgenin alanı = ${(Number(base) * Number(height)) / 2}`
);

//2

let [a, b, c] = prompt(
  "Lütfen üçgenin tüm kenar uzunluklarını aralarında bir boşluk olacak şekilde giriniz :"
).split(" ");

console.log(
  `Girilen değerlerdeki üçgenin alanı = ${Number(a) + Number(b) + Number(c)}`
);

//3

let [lengthOfRect, heightofRect] = prompt(
  "Lütfen dikdörtgenin bir kısa ve bir uzun kenar değerlerini aralarında bir boşluk olacak şekilde giriniz :"
).split(" ");

console.log(
  `Girilen değerlerdeki üçgenin alanı = ${
    Number(lengthOfRect) * Number(heightofRect)
  }`
);

console.log(
  `Girilen değerlerdeki üçgenin çevresi = ${
    (Number(lengthOfRect) + Number(heightofRect)) * 2
  }`
);

//4

let r = Number(prompt("Lütfen çemberin yarı çapını giriniz :"));

console.log(`Girilen değerlerdeki çemberin alanı = ${2 * Math.PI * r}`);

//5 (y = 2x - 2)

let slope = 2;
let x_intercept = 1;
let y_intercept = -2;

console.log(
  `Eğim: ${slope}, x-kesim noktası: ${x_intercept}, y-kesim noktası: ${y_intercept}`
);

//6 (m = y2-y1 / x2-x1) => [(x1,y1) = (2,2) and (x2,y2) = (6,10)]

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let m = (y2 - y1) / (x2 - x1);

console.log(`Eğim: ${m}`);

//7

console.log(slope === m);
*/
//8

let x = -3; // y'nin 0 olduğu x değeri -3'tür.
let y = x * x + 6 * x + 9;
y = (x + 3) ** 2;

console.log(`x=${x}, y=${y}`);

//9

let [hours, rate] = prompt(
  "Lütfen haftada kaç saat çalıştığınızı ve saatlik ne kadar kazandığınızı aralarında bir boşluk olacak şekilde giriniz :"
).split(" ");

console.log(
  `Girilen değerlerdeki üçgenin alanı = ${Number(hours) * Number(rate)}`
);

//10

let myName = "Osman Ali";

console.log(
  myName.length > 7 ? "Your name is too long" : "Your name is too short"
);

//11

let myLastName = "Durna";

console.log(
  myName.length > myLastName.length
    ? `Adınız, ${myName}, soyadınız, ${myLastName}'dan, daha uzun.`
    : `Soyadınız, ${myLastName}, adınız, ${myName}'dan, daha uzun.`
);

//12

let myAge = 250;
let yourAge = 25;

console.log(
  myAge > yourAge
    ? `Ben sizden ${myAge - yourAge} yıl daha yaşlıyım.`
    : `Siz benden ${yourAge - myAge} yıl daha yaşlıyım.`
);

//13

let birthYear = Number(prompt("Lütfen doğum yılınızı girin: "));
let age = new Date().getFullYear() - birthYear;

console.log(
  age >= 18
    ? `Siz ${age} yaşındasınız. Araba kullanabilirsiniz.`
    : `Siz ${age} yaşındasınız. Araba kullanabilmek için ${
        18 - age
      } yıl beklemeniz gerekiyor.`
);

//14

let years = parseFloat(prompt("Kaç yaşındasınız: "));
let seconds = years * 365 * 24 * 60 * 60;

console.log(`Siz tam ${seconds} saniyedir yaşıyorsunuz.`);

//15

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();

console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hour}:${minute}`);
console.log(`DD-MM-YYYY HH:mm: ${day}-${month}-${year} ${hour}:${minute}`);
console.log(`DD/MM/YYYY HH:mm: ${day}/${month}/${year} ${hour}:${minute}`);
