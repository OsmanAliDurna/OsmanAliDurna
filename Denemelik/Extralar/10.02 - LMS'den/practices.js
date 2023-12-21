/*
Practice - 1 : Console ' dan girilen bir sayının pozitif, negatif ya da 0 olduğunu tespit ederek console ' a yazdırınız.
Practice - 2 : Console ' dan 3 tamsayı alarak bunların en büyüğünü console ' a yazdırınız.
Practice - 3 : 4 İşlem hesap makinesini yazınız. (2 adet sayı için)
Örnek : yaş, cinsiyet ve sağlıklı bilgileri alınan kişinin,
yaşı 18+, erkek ve sağlıklı olması koşulları altında console ' a Askelik yapmalı, aksi halde  gerekmez yazdırınız.
Practice - 4 : Clarusway'deki haftalık ders ve etkinlik programınızı, console 'dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile console ' a yazdırınız.
Program : Pazartesi - > InClass
Salı- > InClass
Çarşamba- > InClass
Perşembe- > InClass
Cuma -> Teamwork
Cumartesi -> InClass + Workshop
Pazar -> Self-Study
Aksi takdirde -> Gün değeri yanlış girilmiştir.
Practice - 5 : Geçme notunu 50 kabul eden ve girilen nota göre console ' a Geçti veya Kaldı yazdırınız.
Practice - 6 :  Not < 40 ise Kaldı
40 <= Not <= 50 arası Şartlı Geçti
Not > 50 ise Geçti kabul eden ve girilen nota göre console ' a Geçti, Şartlı Geçti veya Kaldı yazdırınız.
Practice - 7 : Console ' dan kişinin maaşını alan,
-Eğer girilen maaş asgari ücretten az ise maaşa %50 zam,
-Aksi takdirde %10 zam
yapan kodu Ternary deyimi kullanarak yazınız.
Practice - 8 : Console ' dan kişinin gelir ve gider miktarını alan,
-eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir,
-değilse Kredi Verilemez
şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.
*/

// Practice - 1 : Console ' dan girilen bir sayının pozitif, negatif ya da 0 olduğunu tespit ederek console ' a yazdırınız.

let girilenSayı = 0;
console.log(
  `Girilen sayı ${
    girilenSayı == 0
      ? "0'"
      : girilenSayı > 0
      ? "Pozitif bir sayı"
      : "Negatif bir sayı"
  }dır.`
);

// Practice - 2 : Console ' dan 3 tamsayı alarak bunların en büyüğünü console ' a yazdırınız.

let girilenSayı1 = 3;
let girilenSayı2 = 93;
let girilenSayı3 = 39;
console.log(Math.max(girilenSayı1, girilenSayı2, girilenSayı3));

// Practice - 3 : 4 İşlem hesap makinesini yazınız. (2 adet sayı için)

let x = Number(prompt("İlk sayıyı giriniz : "));
let y = Number(prompt("İlk sayıyı giriniz : "));
let işlem = prompt("Hangi işlemi yapmak isterseniz giriniz. + , - , * , /");

switch (işlem) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;

  default:
    break;
}

/*
Örnek : yaş, cinsiyet ve sağlıklı bilgileri alınan kişinin,
yaşı 18+, erkek ve sağlıklı olması koşulları altında console ' a Askelik yapmalı, aksi halde  gerekmez yazdırınız.
*/

let yaş = 33;
let cinsiyet = "erkek";
let sağlıklı = true;

console.log(
  `Askerlik yapması gerek${
    yaş >= 18
      ? cinsiyet == "erkek"
        ? sağlıklı
          ? "ir."
          : "mez."
        : "mez."
      : "mez."
  } `
);

/*
Practice - 4 : Clarusway'deki haftalık ders ve etkinlik programınızı, console 'dan girilen gün değerine göre çıktı veren 
kodu switch-case yapısı ile console ' a yazdırınız.
Program : Pazartesi - > InClass
Salı- > InClass
Çarşamba- > InClass
Perşembe- > InClass
Cuma -> Teamwork
Cumartesi -> InClass + Workshop
Pazar -> Self-Study
Aksi takdirde -> Gün değeri yanlış girilmiştir.
*/

let gün = prompt("Günü giriniz : ");

switch (gün) {
  case "Pazartesi":
  case "Salı":
  case "Çarşamba":
  case "Perşembe":
    console.log("InClass");
    break;

  case "Cuma":
    console.log("Teamwork");
    break;

  case "Cumartesi":
    console.log("InClass + Workshop");
    break;

  case "Pazar":
    console.log("Self - Study");
    break;

  default:
    console.log("Gün değeri yanlış girilmiştir.");
    break;
}

// Practice - 5 : Geçme notunu 50 kabul eden ve girilen nota göre console ' a Geçti veya Kaldı yazdırınız.

let girilenNot = Number(prompt("Notunuzu giriniz : "));

console.log(`${girilenNot >= 50 ? "Geçti" : "Kaldı"}.`);

/*
Practice - 6 :  Not < 40 ise Kaldı
40 <= Not <= 50 arası Şartlı Geçti
Not > 50 ise Geçti kabul eden ve girilen nota göre console ' a Geçti, Şartlı Geçti veya Kaldı yazdırınız.
*/

let girilenNot2 = Number(prompt("Notunuzu giriniz : "));

console.log(
  `${
    girilenNot2 > 50 ? "Geçti" : girilenNot2 >= 40 ? "Şartlı geçti" : "Kaldı"
  }.`
);

/*
Practice - 7 : Console ' dan kişinin maaşını alan,
-Eğer girilen maaş asgari ücretten az ise maaşa %50 zam,
-Aksi takdirde %10 zam
yapan kodu Ternary deyimi kullanarak yazınız.
*/

let asgariÜcret = 1000;
let girilenMaaş = Number(prompt("Lütfen maaşınızı giriniz : "));

console.log(
  `${girilenMaaş < asgariÜcret ? "Maaşa %50 Zam" : "Maaşa %10 Zam"}.`
);

/*
Practice - 8 : Console ' dan kişinin gelir ve gider miktarını alan,
-eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir,
-değilse Kredi Verilemez
şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.
*/

let asgariÜcret2 = 1000;
let gider = 800;
let girilenMaaş2 = Number(prompt("Lütfen maaşınızı giriniz : "));

console.log(
  `${
    girilenMaaş2 - gider >= asgariÜcret2
      ? "Kredi Verilebilir"
      : "Kredi Verilemez"
  }.`
);

