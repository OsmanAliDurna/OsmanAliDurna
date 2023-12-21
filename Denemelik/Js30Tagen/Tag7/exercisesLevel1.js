//1

let fullName = "Osman Ali Durna";

let declare = (name) => name;

console.log(declare(fullName));

//2

let firstName = "Osman Ali";
let lastName = "Durna";

let declare2 = (name1, name2) => name1 + " " + name2;

console.log(declare2(firstName, lastName));

//3

let firstNumber = 1;
let secondNumber = 2;

let declare3 = (number1, number2) => number1 + number2;

console.log(declare3(firstNumber, secondNumber));

//4

let shortEdge = 10;
let longEdge = 15;

let declare4 = (edge1, edge2) => edge1 * edge2;

console.log(declare4(shortEdge, longEdge));

//5

let declare5 = (edge1, edge2) => (edge1 + edge2) * 2;

console.log(declare5(shortEdge, longEdge));

//6

let length = 10;
let height = 15;
let width = 20;

let declare6 = (edge1, edge2, edge3) => edge1 * edge2 * edge3;

console.log(declare6(length, height, width));

//7

let r = 10;

let declare7 = (r) => Math.PI * r * r;

console.log(declare7(r));

//8

let declare8 = (r) => Math.PI * 2 * r;

console.log(declare8(r));

//9

let mass = 300;
let volume = 15;

let declare9 = (mass, volume) => mass / volume;

console.log(declare4(mass, volume));

//10

let distance = 1000;
let time = 20;

let declare10 = (distance, time) => distance / time;

console.log(declare4(distance, time));

//11

let mass2 = 120;
let gravity = 9.89;

let declare11 = (mass2, gravity) => mass2 * gravity;

console.log(declare4(mass2, gravity));

//12

let celcius = 70;

let declare12 = (celcius) => celcius * (9 / 5) + 32;

console.log(declare12(celcius));

//13

let weight2 = 120;
let height2 = 1.86;

let declare13 = (weight2, height) => weight2 / height2 ** 2;

console.log(
  declare13(weight2, height2),
  declare13(weight2, height2) >= 30
    ? "Obese"
    : declare13(weight2, height2) >= 25
    ? "OverWeight"
    : declare13(weight2, height2) >= 18.5
    ? "Normal"
    : declare13(weight2, height2) < 18.5
    ? "Underweight"
    : null
);

//14

let month = 10;

let declare14 = (month) =>
  month == 1 || month == 2 || month == 12
    ? "Winter"
    : month > 8
    ? "Autumn"
    : month > 5
    ? "Summer"
    : "Spring";

console.log(declare14(month));

//15

let declare15 = (...numbers) =>
  numbers[0] > numbers[1]
    ? numbers[0] > numbers[2]
      ? numbers[0]
      : numbers[2]
    : numbers[1] > numbers[2]
    ? numbers[1]
    : numbers[2];

console.log(declare15(0, -10, 25));
