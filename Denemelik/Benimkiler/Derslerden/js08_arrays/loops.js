console.log("**** LOOPS IN ARRAYS ****");

const notlar = [20, 55, 100, 89, 32];

let toplam = 0;

// CLASSIC FOR

// for (let index = 0; index < notlar.length; index++) {
//     toplam += notlar[index];
// }

// FOR OF

// for (const item of notlar) {
//     toplam += item;
// }

// console.log("TOPLAM : " + toplam);

// FOR IN

// const ellidenAz = [];
// const ellidenCok = [];

// for (const not in notlar) notlar[not] < 50 ? ellidenAz.push(notlar[not]) : ellidenCok.push(notlar[not]);

// console.log(ellidenAz);
// console.log(ellidenCok);

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const ogrenciBul = (ad) => {
    let count = 0;
    for (const student of students) {
        student == ad && count++;
    }
    return `Students dizisinde ${count} tane ${ad} isimli öğrenci var.`;
}

students.forEach((element) => console.log(ogrenciBul(element)));

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [250, 150, 300, 500];

// let dizi = []

// dizi.push(prices.forEach((price, index, arr) => arr[index] < 370 && price * 1.5));
// console.log(dizi);

// dizi.forEach((price, index, arr) => arr[index] < 270 && console.log(price));

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperCasedNames = names.map((n) => n.toUpperCase());
console.log(upperCasedNames);

const upperNames = [];
names.forEach((n) => upperNames.push(n.toUpperCase()));
console.log(upperNames);

const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const buyukOnBin = maaslar.filter((maas) => maas > 10000);

// map le karmaşıklaştıramadım.

// let other = [...maaslar];
// const buyukOnBin = maaslar.map((maas) => {
//     other = [];
//     maas < 10000 && other.push(maas);
//     return other
// });

// console.log(buyukOnBin)

// declerative = human readable, anlaşılır, fonksiyonlar kullanılır.
// imperative = machine readable, anlaşılması karmaşıktır, ifler forlar kullanılır.