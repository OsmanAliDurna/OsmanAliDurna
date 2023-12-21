let trueValue = 4 > 3;
let falseValue = "";

console.log(5 + 3 * 2 - 5);

// prompt("Bir sayı giriniz : ", /*default değer girilebilir*/ 5);
// alert("Etwas");
// confirm("Einverstanden ? ");

const now = new Date();
console.log(now);

const date = new Date();
console.log(now == date);

let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds(),
  dayNumber = date.getDay();

let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`;

console.log(humanReadableDate);

