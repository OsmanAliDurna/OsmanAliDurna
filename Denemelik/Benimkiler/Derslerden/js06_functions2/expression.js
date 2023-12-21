// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****");

//* ORNEK1:
//***********************************************/

// const topla = function (a, b) {
//   return a + b;
// };

// console.log("Toplam: ", topla(3, 7));

// const tekMiCiftMi = function (num) {
//   const result = num % 2 ? "TEK'tir." : "ÇİFT'tir.";
//   return result;
// };

// console.log(100 + " sayısı : " + tekMiCiftMi(100));

// const kareAl = (x) => x * x;

// console.log(kareAl(4));

// const yasHesapla = (dob) => new Date().getFullYear() - dob;

// console.log("Yaş :", yasHesapla(1989));

// const silindir = (r, h) => {
//   return Math.PI * r * r * h;
// };

// console.log("Hacim :", silindir(2, 3));

const topla = (a, b) => a + b;
const çarp = (a, b) => a * b;
const çıkar = (a, b) => a - b;
const böl = (a, b) => a / b;

const hesapMakinesi = (a, b, operation) => {
  switch (operation) {
    case "+":
      return topla(a, b);
    case "-":
      return çıkar(a, b);
    case "*":
      return çarp(a, b);
    case "/":
      return böl(a, b);
    default:
      return "Böyle bir matematiksel işlem çözemiyorum.";
  }
};

const num1 = 10;
const num2 = 5;
const operation = "*";

console.log(hesapMakinesi(num1, num2, operation));

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const calculator = (num1, num2, op) => {
  return op(num1, num2);
};

console.log(calculator(2, 3, mult));
console.log(calculator(2, 3, sum));
console.log(calculator(2, 3, sub));
console.log(calculator(2, 3, div));
