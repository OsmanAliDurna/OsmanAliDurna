// // 1 den girilen sayıya kadar olanların toplamı

// let number = 10;
// let sum = 0;

// for (let index = 1; index <= number; index++) {
//   sum += index;
// }

// console.log(sum);

// // 10 tane (0-100 arası) rasgele sayı

// let randomNumber;

// for (let index = 1; index <= 10; index++) {
//   randomNumber = Math.floor(Math.random() * 101);
//   console.log(`${index}. random sayı => ${randomNumber}`);
// }

// // Girilen sayının asal olup olmadığını bulan program

// let asalSayımız = 7;
// let isAsal = true;

// for (let index = 2; index < asalSayımız; index++) {
//   //   if (asalSayımız % index == 0) {
//   //     console.log("Sayı asal değildir.");
//   //   } else {
//   //     console.log("Sayı asaldır.");
//   //   }

//   if (asalSayımız % index == 0) {
//     isAsal = false;
//     break;
//   }
// }

// console.log(`Sayımız ${isAsal ? "asaldır." : "asal değildir."} `);

// // q veya Q girilene kadar ki girilen sayıların ortalamasını alan kodu yazalım.

// let toplam = 0;
// let sayac = 0;
// let değer;
// let ortalama;

// do {
//   değer = prompt("Lütfen bir değer giriniz.");
//   isNaN(değer) ? "" : (toplam += Number(değer));
//   sayac++;
//   ortalama = toplam / (sayac - 1);
// } while (!değer.toLowerCase().startsWith("q"));

// console.log(ortalama);

// Tahmin oyunu

let guessed = Math.floor(Math.random() * 101);
let guess;
let hak = 5;
let durum = "Kaybettiniz.";

do {
  guess = Number(prompt("Enter a number :"));
  hak--;

  if (guessed == guess) {
    durum = "Kazandınız.";
    break;
  } else if (hak > 0) {
    guessed > guess ? alert("Arttır") : alert("Azalt");
  } else {
    break;
  }
} while (true);

alert(durum);
