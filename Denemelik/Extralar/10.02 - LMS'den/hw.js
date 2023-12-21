// ÖDEVLER:

/*
1 ) Soru-1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.
0-25 arası not karşılığı FF olmalı,
26-45 arası DD,
46-65 arası CC,
66- 75 arası BB,
76-90 arası BA,
91-100 arası AA olarak çevrilmelidir.
100'den büyük veya O'dan küçük değerlerde hata mesajı verecektir.
*/

let girilenNot = Number(prompt("Notunuzu giriniz : "));

if (girilenNot >= 0 && girilenNot <= 25) {
  console.log("Notunuz FF'dir.");
} else if (girilenNot > 25 && girilenNot <= 45) {
  console.log("Notunuz DD'dir.");
} else if (girilenNot > 45 && girilenNot <= 65) {
  console.log("Notunuz CC'dir.");
} else if (girilenNot > 65 && girilenNot <= 75) {
  console.log("Notunuz BB'dir.");
} else if (girilenNot > 75 && girilenNot <= 90) {
  console.log("Notunuz BA'dir.");
} else if (girilenNot > 90 && girilenNot <= 100) {
  console.log("Notunuz AA'dir.");
} else {
  console.log("Hatalı bir not değeri girdiniz.");
}

/*
Soru-2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı
kullanarak yazınız.
*/

let ay = prompt("Sırasını öğrenmek istediğiniz ayın adını giriniz : ");

switch (ay) {
  case "Ocak":
    console.log(ay + "ın sıralaması 1'dir.");
    break;
  case "Şubat":
    console.log(ay + "ın sıralaması 2'dir.");
    break;
  case "Mart":
    console.log(ay + "ın sıralaması 3'dür.");
    break;
  case "Nisan":
    console.log(ay + "ın sıralaması 4'dür.");
    break;
  case "Mayıs":
    console.log(ay + "ın sıralaması 5'dir.");
    break;
  case "Haziran":
    console.log(ay + "ın sıralaması 6'dır.");
    break;
  case "Temmuz":
    console.log(ay + "un sıralaması 7'dir.");
    break;
  case "Ağustos":
    console.log(ay + "un sıralaması 8'dir.");
    break;
  case "Eylül":
    console.log(ay + "ün sıralaması 9'dur.");
    break;
  case "Ekim":
    console.log(ay + "in sıralaması 10'dur.");
    break;
  case "Kasım":
    console.log(ay + "ın sıralaması 11'dir.");
    break;
  case "Aralık":
    console.log(ay + "ın sıralaması 12'dir.");
    break;

  default:
    console.log(
      "Lütfen sıralamasını öğrenmek istediğiniz ayın adını türkçe ve Büyük harfle başlayacak şekilde tekrar deneyiniz."
    );
    break;
}

// Soru-3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız.

let sayı1 = 1;
let sayı2 = 11;
let sayı3 = 111;

console.log(sayı1 + sayı2 + sayı3);
console.log(sayı1 * sayı2 * sayı3);
console.log(Math.min(sayı1, sayı2, sayı3));
console.log(Math.max(sayı1, sayı2, sayı3));

// Soru-4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary deyimi ile yapınız).

let girilenSayı = Number(prompt("Lütfen bir sayı giriniz : "));

console.log(`Girilen sayı ${girilenSayı % 2 == 1 ? "TEK" : "ÇİFT"}tir.`);

/*
Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı tasarlayınız. 
Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır.
*/

let type = prompt(
  "Lütfen hangi birimden giriş yapacağınızı ((F)ahrenheit , (C)elsius için) belirtiniz : "
);
let girilenDerece = Number(prompt("Lütfen dereceyi giriniz :"));
let derece = 0;

if (type == "F") {
  derece = (girilenDerece - 32) / 1.8;
} else if (type == "C") {
  derece = girilenDerece * 1.8 + 32;
} else {
  console.log("Lütfen girdiğiniz bilgileri kontrol ediniz.");
}

console.log(
  `Girdiğiniz ${girilenDerece}° ${type}'ın diğer birimden karşılığı : ${derece}° ${
    type == "F" ? "C" : "F"
  }'dir.`
);