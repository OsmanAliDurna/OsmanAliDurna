// let girilenSayı = prompt("");

// if (girilenSayı > 0) {
//   console.log("Girilen sayının negatifi ", girilenSayı * -1);
// } else {
//   console.log("Girilen sayının negatifi ", girilenSayı);
// }

// girilenSayı > 0
//   ? console.log("Girilen sayının negatifi ", girilenSayı * -1)
//   : console.log("Girilen sayının negatifi ", girilenSayı);

// console.log(
//   "Girilen sayının negatifi ",
//   (girilenSayı > 0 ? girilenSayı * -1 : girilenSayı)
// );

// console.log(`Girilen sayının negatifi ${-Math.abs(girilenSayı)}`);

/*
if (girilenSayı > 0) {
  console.log("Girilen sayının negatifi ", girilenSayı * -1);
} else if (girilenSayı == 0) {
  console.log("Girilen sayının negatifi ", girilenSayı);
} else {
  console.log("Girilen sayının negatifi ", girilenSayı);
}

girilenSayı >= 0
  ? (girilenSayı > 0
    ? console.log("Girilen pozitifin negatifi ", girilenSayı * -1)
    : console.log("Girilen sıfırın negatifi ", girilenSayı))
  : console.log("Girilen negatifin negatifi ", girilenSayı);
*/

let text =
  "Ben öğretmenlikten aylık 3000 €, yılda 12000 € bonus ve özel derslerden de ortalama ayda 5000 € kazanıyorum.";

let splited_text = text.split(" ");
let income = [];
let often = [];

for (let index = 0; index < splited_text.length; index++) {
  !isNaN(splited_text[index])
    ? income.push(Number(splited_text[index])) &&
      often.push(splited_text[index - 1].startsWith("ay") ? 12 : 1)
    : null;
}

console.log(
  `Ben yılda ${
    income[0] * often[0] + income[1] * often[1] + income[2] * often[2]
  } € kazanıyorum.`
);

// console.log(
//   `Ben yılda ${
//     paralar[0] * (often[0].startsWith("ay") ? 12 : 1) +
//     paralar[1] * (often[1].startsWith("ay") ? 12 : 1) +
//     paralar[2] * (often[2].startsWith("ay") ? 12 : 1)
//   } € kazanıyorum.`
// );
