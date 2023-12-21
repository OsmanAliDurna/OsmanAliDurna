//1

let ay = prompt("Bir ay girin:").toLowerCase();

switch (ay) {
  case "ocak":
  case "mart":
  case "mayıs":
  case "temmuz":
  case "ağustos":
  case "ekim":
  case "aralık":
    console.log(ay.charAt(0).toUpperCase() + ay.slice(1) + " ayı 31 gündür.");
    break;
  case "nisan":
  case "haziran":
  case "eylül":
  case "kasım":
    console.log(ay.charAt(0).toUpperCase() + ay.slice(1) + " ayı 30 gündür.");
    break;
  case "şubat":
    console.log(ay.charAt(0).toUpperCase() + ay.slice(1) + " ayı 28 gündür.");
    break;
  default:
    console.log("Geçerli bir ay girin.");
}

//2

let ay2 = prompt("Bir ay girin:").toLowerCase();
let yil = prompt("Bir yıl girin:");

let ayNumarasi;
switch (ay2) {
  case "ocak":
    ayNumarasi = 0;
    break;
  case "şubat":
    ayNumarasi = 1;
    break;
  case "mart":
    ayNumarasi = 2;
    break;
  case "nisan":
    ayNumarasi = 3;
    break;
  case "mayıs":
    ayNumarasi = 4;
    break;
  case "haziran":
    ayNumarasi = 5;
    break;
  case "temmuz":
    ayNumarasi = 6;
    break;
  case "ağustos":
    ayNumarasi = 7;
    break;
  case "eylül":
    ayNumarasi = 8;
    break;
  case "ekim":
    ayNumarasi = 9;
    break;
  case "kasım":
    ayNumarasi = 10;
    break;
  case "aralık":
    ayNumarasi = 11;
    break;
  default:
    console.log("Geçerli bir ay girin.");
    return;
}

let tarih = new Date(yil, ayNumarasi + 1, 0);
console.log(
  ay2.charAt(0).toUpperCase() +
    ay2.slice(1) +
    " ayı " +
    tarih.getDate() +
    " gündür."
);
