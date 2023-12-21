console.log("*** CONDITIONS ***");

console.log("OPERATORS");

//! ========== Template Literals ============
const maas = 70000;
const izinGunu = 30;
console.log(`MAAS=${maas} + SIGORTA, 
IZIN SURESI: ${izinGunu} gün`);

// ? template literal ile bir JS expression kullanmak mumkundu
console.log(`${maas - izinGunu * 500}`);

//? Ornek
// const firstName = prompt("Please enter your name:")
// const dob = prompt("Enter your day of birth:")
// console.log(`${firstName} is ${new Date().getFullYear() - dob} years old`)

//? NOT: Sistem saatini almak icin Date() class'ı kullanilabilir.
console.log(new Date().getFullYear());

//! Prompt funksiyonu verileri hep string olarak alir
// console.log(dob, typeof dob)

//* CAPRMA VE US ALMA (Multiply, Pow)
//*--------------------------------------

//? Ornek
//?-------------------------------------
//? Kullanicidan veri girisi istedik.
// ? prompt ile kullancidan alinan veri default olarak string'dir
//? Bu veriyi number'a Number() fonksyinu ile cevirebilriz.

//? promptan gelen deger  string oldugundan sayısal islemlerde kullanmak üzere NUmber'lastirmakta fayda vardir.
//? 1- promptun onune + koymak
//? 2- Number() kullanmak
// const r = +prompt("Please enter the radius:")
// const r = Number(prompt("Please enter the radius:"))
// const square = (Math.PI * r ** 2).toFixed(1) //? virgülden sonra 3 basamak alir

// console.log(`SQUARE= ${square}`)

//? Yuvarlama fonsk.

// console.log(Math.round(123.556)); //? yakın tam sayiya yuvarlar(124)
// console.log(Math.ceil(123.26)); //? tavana yuvarlar (124)
// console.log(Math.floor(123.99)); //? tabana yuvarlar (123)

// console.log(Math.trunc(123.19)); //? her zaman tam kısmı alir.
// console.log((123.567).toFixed(2)); //? virgüden sonra 2 basamak alır (string alarak)
// console.log((123.567).toExponential(3)); //? üstel gösterim (string alarak)

// //? Math.random() 0-1 arasinda rasgele sayi uretir.

// console.log(Math.round(Math.random() * 100));

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.trunc(); //* sayinin tam kismini alir.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

//* ARTTIRMA VE AZALTMA (Inc, Dec)
//*--------------------------------------

// let number1 = 55;

// number1 += 1;
// number1++;
// ++number1;
// number1 = number1 + 1;

// console.log("NUMBER1:", number1++); //? 59
// console.log({ number1 }); //? 60

// console.log(number1--); //?60

// number1 -= 5;
// console.log(number1); //? 54

// number1 *= 2;
// console.log(number1);

//* MOD
//*--------------------------------------

// const number2 = 3 % 2;
// console.log({ number2 });

// SORU: Girilen 3 basamakli sayinin basamak degerlerini bularak ayrı ayrı yazdiran kod

// const number3 = prompt("Lütfen 3 basamaklı bir sayı giriniz : ");

// const birler = number3 % 10;
// console.log({ birler });

// const onlar = ((number3 % 100) - birler) / 10;
// console.log({ onlar });

// const yüzler = ((number3 % 1000) - (number3 % 100)) / 100;
// console.log({ yüzler });

// * ================================================
// *          KARSILASTIRMA OPERATORLERI
// * ================================================

// console.log(5 == "5"); //? true
// console.log(5 === "5"); //? false
// console.log("5" === "5"); //? true

// console.log(4 != 5); //? true
// console.log(4 != "4"); //? false
// console.log(4 !== "4"); //? true

// console.log(4 > 4); //? false
// console.log(4 >= 4); //? true
// console.log(4 <= 6); //? true

// * ================================================
// *            MANTIKSAL OPERATORLER
// * ================================================

// console.log("** LOGIC ***");
// const d1 = true;
// const d2 = false;

// console.log(d1 && d2); //? false
// console.log(d1 || d2 || false || false); //? true

// console.log(!d2); //? true

// const yas = 19;
// const cinsiyet = "e";

// if (yas >= 18 && (cinsiyet === "E" || cinsiyet === "e")) {
//   console.log("Askere gitmeli");
// } else {
//   console.log("Gerek yok");
// }

//? Javascripte surekli falsy olan 6 deger bulunmaktadir.

const nal = null;
const tanimsiz = undefined;
const bos = "";
const sayiDegil = NaN;
const sifir = 0;
const falsy = false;

console.log(Boolean(0)); // false
console.log(!0); // true
console.log(Boolean(undefined)); // false

let number4 = "0"; // falsy

if (!number4) {
  number4 = prompt("Lütfen bir değer giriniz : ");
}

console.log(number4);

const number5 = -100;

console.log(Boolean(number5));

// * ================================================
// *            TIP DONUSUMLERI
// * ================================================

const kimlikNo = "1234567890";
const numberKimlikNo = Number(kimlikNo);
console.log(numberKimlikNo);

const parite = "1.2";
const tl = "1200";

const total = Number(parite) + Number(tl);
const total1 = parseFloat(parite) + parseFloat(tl);
console.log(total);
console.log(total1);

console.log(Number("33are123"));
console.log(parseFloat("33are123"));
