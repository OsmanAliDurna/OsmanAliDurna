//? Declaration
//? İlk yöntem

function topla() {
  let a = 5;
  let b = 10;
  let sonuc = a + b;
  console.log(sonuc);
}

topla();

for (let index = 0; index < 3; index++) topla();

function carp(x, y) {
  console.log(x * y);
}

carp(3, 10);

function yazdir(lang = "Hello", name = "noname") {
  console.log(`${lang} ${name}`);
}

yazdir("hello", "Ahmet");
yazdir("Hello", "Canan");
yazdir(undefined, "Canan");
yazdir();

function bol(a, b) {
  const res = a / b;
  return res;
}

let sonuc = bol(10, 2);
console.log("Sonuç = " + sonuc);

function toplama(n1, n2, n3) {
  return n1 + n2 + n3;
}

console.log(toplama(3, 5, 7));

// const sayi = Number(prompt("Bir sayı giriniz : "));

// function tekVeyaÇift(num) {
//   return num % 2 ? "Tektir" : "Çifttir";
// }

// console.log(`${sayi} sayısı ${tekVeyaÇift(sayi)}`);

// 1. Yöntemdeki fonksiyonun konumu:

function yaz() {
  console.log("Merhaba");
}

yaz();

