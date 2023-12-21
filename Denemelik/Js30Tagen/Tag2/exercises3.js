//1
console.log("Exercise 1:");
console.log(
  "Love is the best thing in this world. Some found their love and some are still looking for their love.".split(
    " "
  ).length
);

//2
let bec = "because";
console.log("Exercise 2:");
console.log(
  "You cannot end a sentece with because because because is a conjuction".match(
    /because/gi
  ).length
);

//3
console.log("Exercise 3:");
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. \
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. \
;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? \
%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching\
";

let clean = sentence
  .replaceAll("%", "")
  .replaceAll("@", "")
  .replaceAll("&", "")
  .replaceAll("$", "")
  .replaceAll("#", "")
  .replaceAll("!", "")
  .replaceAll(";", "")
  .replaceAll("?", "")
  .replaceAll(",", "")
  .replaceAll(".", "");
// let clean = sentence.replace(/[^a-zA-Z ]/g, "");

let wordpool = clean.toLowerCase().split(" "); // 46 words.

//4
console.log("Exercise 4:");
let text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let annualIncome =
  Number(text.match(/\d+/g)[0]) * 12 +
  Number(text.match(/\d+/g)[1]) +
  Number(text.match(/\d+/g)[2]) * 12;

console.log(`He earns ~${annualIncome} € in a year`);
