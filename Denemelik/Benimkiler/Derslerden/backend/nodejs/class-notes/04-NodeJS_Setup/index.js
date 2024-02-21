let node = 'NodeJS'

console.log("*******1*********");
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

console.log("*******2*********");
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

console.log("*******3*********");
// let sum = 0;
// let number = 0;
// const prompt = require("prompt-sync")({
//     sigint: true
// })
// while (number > -1) {
//     sum += number;
//     number = Number(prompt("Bir sayı giriniz : "));
// }
// console.log(sum)

console.log("*******4*********");
console.log(null == undefined);
console.log(null === undefined);
console.log(isNaN(2 + null));
console.log(isNaN(2 + undefined));
null ? console.log("true") : console.log("false");

console.log("*******5*********");
var hash = "";
var count = 1;
var n = 3;
for (var x = 1; x <= 7; x++) {
    while (hash.length != count)
        hash += "#";
    hash += "\n";
    count += n;
    n++;
}

console.log(hash);

console.log("*******6*********");
let firstName = null
let lastName = null
let nickName = "coderBond"
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous")

console.log("*******7*********");
function onZoom(x) {
    console.log("Zoom active for", x)
}

function startClass(x, y, z) {
    console.log(" Class starts at", x);
    y(z);
}
startClass("20:00", onZoom, "FS");

console.log("*******8*********");
console.log((function f(n) {
    return ((n > 1) ? n * f(n - 1) : n)
})(5));

console.log("*******9*********");
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1,
            y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

console.log("*******10********");
let a = [10, 20, 30];
a[10] = 100;
console.log(a[6]);
let b = [undefined];
b[2] = 1;
console.log(b);
console.log(b[1]);
console.log(b.map(e => 99));

console.log("*******11********");
function orderPizza(type, ingredients, callback) {
    console.log('Pizza ordered...');
    console.log('Pizza is for preparation');
    setTimeout(function () {
        let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is $10`;
        callback(msg);
    }, 3000);
}
orderPizza('Vegeterian', 'Cheese', function (message) {
    console.log(message);
});

console.log("*******12********");
class Employee {
    constructor(id=1, name="John Doe") {
        this.id = id;
        this.name = name;
    }
    detail() {
        console.log(this.id + " " + this.name)
    }
}
let e1 = new Employee(10, "Qadir Adamson");
let e2 = new Employee(undefined, "Victor Hug");
let e3 = new Employee(12)
e1.detail();
e2.detail();
e3.detail();

console.log("*******13********");
class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    eat() {
        return `${this.name} is eating`;
    }
    sound() {
        return `${this.name} is says`;
    }
}
class Cat extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }
    sound() {
        return `${super.sound()} Meow!`;
    }
}
let felix = new Cat("felix", 5)
console.log(felix.sound())