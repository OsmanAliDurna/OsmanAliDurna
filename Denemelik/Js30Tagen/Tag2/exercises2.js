//1
console.log("Exercise 1:");
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

//2
console.log("Exercise 2:");
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

//3
console.log("Exercise 3:");
console.log(typeof 10 == typeof "10");
console.log(typeof 10 == typeof parseInt("10"));
console.log(typeof toString(10) == typeof "10");

//4
console.log("Exercise 4:");
console.log(parseFloat(9.8) == 10);
console.log(Math.round(parseFloat(9.8)) == 10);

//5
console.log("Exercise 5:");
console.log("Python".includes("on") && "jargon".includes("on"));

//6
console.log("Exercise 6:");
console.log("I hope this course is not full of jargon".includes("jargon"));

//7
console.log("Exercise 7:");
console.log(Math.floor(Math.random() * 101));

//8
console.log("Exercise 8:");
console.log(Math.floor(Math.random() * 51) + 50);

//9
console.log("Exercise 9:");
console.log(Math.floor(Math.random() * 256));

//10
console.log("Exercise 10:");
let js = "JavaScript";
let randIndex = Math.floor(Math.random() * js.length);
console.log(js[randIndex]);

//11
console.log("Exercise 11:");
console.log(
  "1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125\n\
"
);

//12
console.log("Exercise 12:");
console.log(
  "You cannot end a sentence with because because because is a conjuction".substr(
    31,
    23
  )
);
