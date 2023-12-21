let word = "JS";

console.log(word);

word[0] = "Y";

console.log(word);

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log("nums == numbers ?", nums == numbers);
console.log("[1, 2, 3] == [1, 2, 3] ?", [1, 2, 3] == [1, 2, 3]);

let user1 = {
  name: "Ali",
  surname: "Baba",
};

let user2 = {
  name: "Ali",
  surname: "Baba",
};

console.log("user1 == user2 ?", user1 == user2);

let nums2 = [1, 2, 3];
let numbers2 = nums2;

console.log("nums2 == numbers2 ?", nums2 == numbers2);

let users = {
  name: "Ali",
  surname: "Baba",
};

let users2 = users;

console.log("users == users2 ?", users == users2);

// Non - Primitive Data types can not be same, but their referances can.

// Rasgele sayılar 0-0.999999999999 arasında.
const randNum = Math.random();
console.log(randNum);

// Rasgele rakamlar 0-9 arasında.
let randNumBigger = Math.floor(Math.random() * 10);
console.log(randNumBigger);

console.log(typeof "5");
console.log(typeof Number("5"));
console.log(typeof +"5");
console.log(typeof parseInt("5"));
console.log(typeof 5);
console.log(typeof 5.5);
console.log(typeof parseFloat("5.5"));
