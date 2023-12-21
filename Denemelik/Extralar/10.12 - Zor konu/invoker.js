// const sum = (a, b) => console.log(a + b);
const sum = (a, b) => a + b;
const mns = (a, b) => a - b;
const mlt = (a, b) => a * b;
const div = (a, b) => a / b;

const hesapMakinesi = (a, b, func) => func(a, b);

let a = 10;
let b = 5;
// let operation = prompt("İşlemi giriniz : sum - mns - mlt - div ");

// console.log(hesapMakinesi(a, b, sum));
hesapMakinesi(a, b, eval("sum"));
