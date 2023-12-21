//1
let challenge = "30 Days Of JavaScript";

//2
console.log(challenge);

//3
console.log(challenge.length);

//4
let Upp = challenge.toUpperCase();
console.log(Upp);

//5
let Low = challenge.toLowerCase();
console.log(Low);

//6
let Sli = challenge.substring(0, 2);
console.log(Sli);

//7
let Out = challenge.substring(3, challenge.length);
console.log(Out);

//8
let Inc = challenge.includes("Script");
console.log(Inc);

//9
let Spl = challenge.split();
console.log(Spl);

//10
let Spli = challenge.split(" ");
console.log(Spli);

//11
let Split = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(
  ", "
);
console.log(Split);

//12
console.log(challenge.replace("JavaScript", "Python"));

//13
let Chr = challenge.charAt(15);
console.log(Chr);

//14
let ChrC = challenge.charCodeAt("J");
console.log(ChrC);

//15
let ind = challenge.indexOf("a");
console.log(ind);

//16
let las = challenge.lastIndexOf("a");
console.log(las);

//17
console.log(
  "You cannot end a with because because because is a conjuction".indexOf(
    "because"
  )
);

//18
console.log(
  "You cannot end a with because because because is a conjuction".lastIndexOf(
    "because"
  )
);

//19
console.log(
  "You cannot end a with because because because is a conjuction".search(
    "because"
  )
);

//20
let tri = (" " + challenge + " ").trim();
console.log(tri);

//21
console.log(challenge.startsWith(3));

//22
console.log(challenge.endsWith("t"));

//23
console.log(challenge.match(/a/gi));

//24
console.log('30 Days of'.concat('JavaScript'));

//25
console.log(challenge.repeat(2));