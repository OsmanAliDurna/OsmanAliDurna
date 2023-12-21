//1

//2

let solveQuadratic = (a = 0, b = 0, c = 0, x) => a * x * x + b * x + c;

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

//3

let printArray = (...numbers) => console.log(numbers);

printArray(1, 2, 3, 4, 5, 6);

//4

let showDateTime = () => {
  let show = new Date();

  return (
    String(show.getDate()).padStart(2, "0") +
    "/" +
    String(show.getMonth()).padStart(2, "0") +
    "/" +
    String(show.getFullYear()).padStart(4, "0") +
    " " +
    String(show.getHours()).padStart(2, "0") +
    ":" +
    String(show.getMinutes()).padStart(2, "0")
  );
};

console.log(showDateTime());

//5

let swapValues = (a, b) => {
  return console.log("x = " + b + ", " + "y = " + a);
};
swapValues(3, 4); // x = 4, y =3
swapValues(4, 5); // x = 5, y = 4

//6

let reverseArray = (array) => array.reverse();

console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']

//7

let capitalizeArray = (array) => {
  let result = [];
  for (let index = 0; index < array.split(" ").length; index++) {
    result.push(
      array.split(" ")[index][0].toUpperCase() +
        array.split(" ")[index].slice(1).toLowerCase()
    );
  }
  return result.join(" ");
};

console.log(capitalizeArray("ali ve ayşe"));

//8

let dizime = ["Ali", "ve", "Ayşe"];

let addItem = (item, array) => {
  array.push(item);
  return array;
};

console.log(addItem("bunu da koy", dizime));

//9

let dizimden = ["Ali", "ve", "Ayşe"];

let removeItem = (index, array) => {
  array.splice(index, 1);
  return array;
};

console.log(removeItem(1, dizimden));

//10

let eKadar = 10;

let sumOfNumbers = (number) => {
  let sum = 0;
  for (let index = 1; index <= number; index++) {
    sum += index;
  }
  return sum;
};

console.log(sumOfNumbers(eKadar));

//11

let sumOfOdds = (number) => {
  let sum = 0;
  for (let index = 1; index <= number; index += 2) {
    sum += index;
  }
  return sum;
};

console.log(sumOfOdds(eKadar));

//12

let sumOfEvens = (number) => {
  let sum = 0;
  for (let index = 2; index <= number; index += 2) {
    sum += index;
  }
  return sum;
};

console.log(sumOfEvens(eKadar));

//13

let evensAndOdds = (number) => {
  let odds = 0;
  let evens = 0;
  for (let index = 1; index <= number; index++) {
    index % 2 ? odds++ : evens++;
  }
  return (
    "The number of odds are  : " + odds + "\nThe number of evens are : " + evens
  );
};

console.log(evensAndOdds(eKadar));

//14

let sum2 = (...numbers) => {
  let index = 0;
  let sum = 0;
  while (index != numbers.length) {
    sum += numbers[index];
    index++;
  }
  return console.log(sum);
};

sum2(1, 2, 3); // -> 6
sum2(1, 2, 3, 4); // -> 10

//15

let randomUserIp = () =>
  Math.floor(Math.random() * 1000) +
  "." +
  Math.floor(Math.random() * 1000) +
  "." +
  Math.floor(Math.random() * 10) +
  "." +
  Math.floor(Math.random() * 10);

console.log(randomUserIp());

//16

let randomMacAdress = () =>
  Math.floor(Math.random() * 100) +
  "-" +
  Math.floor(Math.random() * 100) +
  "-" +
  Math.floor(Math.random() * 100) +
  "-" +
  Math.floor(Math.random() * 100) +
  "-" +
  Math.floor(Math.random() * 100) +
  "-" +
  Math.floor(Math.random() * 100);

console.log(randomMacAdress());

//17

let randomHexaNumberGenerator = () => {
  let result = "#";
  for (let index = 0; index < 6; index++) {
    let x = Math.floor(Math.random() * 12);
    x == 11 ? (x = "B") : x == 10 ? (x = "A") : null;
    result += x;
  }
  return result;
};

console.log(randomHexaNumberGenerator());
// '#ee33df'

//18

let userIdGenerator = () => {
  let result = "#";
  for (let index = 0; index < 7; index++) {
    let x = Math.floor(Math.random() * 12);
    x == 11 ? (x = "B") : x == 10 ? (x = "A") : null;
    result += x;
  }
  return result;
};

console.log(userIdGenerator());
// 41XTDbE
