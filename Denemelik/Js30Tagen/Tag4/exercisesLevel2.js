//1

let puan = prompt("Lütfen puanınızı giriniz:");

if (puan >= 80 && puan <= 100) {
  console.log("Notunuz: A");
} else if (puan >= 70 && puan < 80) {
  console.log("Notunuz: B");
} else if (puan >= 60 && puan < 70) {
  console.log("Notunuz: C");
} else if (puan >= 50 && puan < 60) {
  console.log("Notunuz: D");
} else if (puan >= 0 && puan < 50) {
  console.log("Notunuz: F");
} else {
  console.log("Geçerli bir puan girin.");
}

//2

let ay = prompt("Lütfen ayı giriniz:").toLowerCase();

switch (ay) {
  case "eylül":
  case "ekim":
  case "kasım":
    console.log("Mevsim: Sonbahar");
    break;
  case "aralık":
  case "ocak":
  case "şubat":
    console.log("Mevsim: Kış");
    break;
  case "mart":
  case "nisan":
  case "mayıs":
    console.log("Mevsim: İlkbahar");
    break;
  case "haziran":
  case "temmuz":
  case "ağustos":
    console.log("Mevsim: Yaz");
    break;
  default:
    console.log("Geçerli bir ay girin.");
}

//3

let gun = prompt("Bugün hangi gün?").toLowerCase();

switch (gun) {
  case "pazartesi":
  case "salı":
  case "çarşamba":
  case "perşembe":
  case "cuma":
    console.log(
      gun.charAt(0).toUpperCase() + gun.slice(1) + " bir iş günüdür."
    );
    break;
  case "cumartesi":
  case "pazar":
    console.log(
      gun.charAt(0).toUpperCase() + gun.slice(1) + " bir hafta sonudur."
    );
    break;
  default:
    console.log("Geçerli bir gün girin.");
}