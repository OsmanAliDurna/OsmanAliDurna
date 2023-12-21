function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

let msg = "Merhaba dünya!";

console.log(msg);

function sayHello() {
  let msg = "Hello World!";
  //   console.log(msg);
  return msg;
}

console.log(sayHello(msg));
console.log(msg);

let hi = sayHello();

console.log(hi);

let mutiply = (num1, num2) => {
  return num1 * num2;
};

console.log("Çarpım =", mutiply(5, 2));

function sumArrayValues(array) {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    total += array[index];
  }
  return total;
}

let sayılarımız = [1, 2, 3, 4, 5, 6];

console.log(sumArrayValues(sayılarımız));

function topla() {
  console.log(arguments);
}

topla(2, 3, 4, 5, 6, 7);

const sayHi = function (name) {
  return "Hello " + name;
};

console.log(sayHi("Ali"));

(function () {
  console.log("Hey yo");
})();

const toplama = (num1 = 1, ...numbers) => {
  console.log(numbers);
};

toplama(2, 3, 4, 5, 6, 7, 8);

// Fonksiyonu kullanmak.

function test() {
  console.log("Test fonksiyonum çalıştı.");
}

test();

// Fonksiyonu çağırmak.

function invoker(func) {
  func();
}

invoker(test);
