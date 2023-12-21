let now = new Date();

let year = now.getFullYear();

// let month = String(now.getMonth() + 1).padStart(2, "0"); // ayı 2 basamaklı hale getirir
// let day = String(now.getDate()).padStart(2, "0"); // günü 2 basamaklı hale getirir
// let hour = String(now.getHours()).padStart(2, "0"); // saati 2 basamaklı hale getirir
// let minute = String(now.getMinutes()).padStart(2, "0"); // dakikayı 2 basamaklı hale getirir
// console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hour}:${minute}`);

let month = String(now.getMonth() + 1);
let day = String(now.getDate());
let hour = String(now.getHours());
let minute = String(now.getMinutes());

console.log(
  `YYYY-MM-DD HH:mm: ${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  } ${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`
);
