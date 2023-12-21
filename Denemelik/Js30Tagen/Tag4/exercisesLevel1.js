//1

let yas = Number(prompt("Lütfen yaşınızı giriniz:"));

if (yas >= 18) {
  console.log("Ehliyet alabilirsiniz.");
} else {
  console.log(
    "Ehliyet alabilmeniz için " + (18 - yas) + " yıl beklemeniz gerekiyor."
  );
}

//2

let myAge = 33;
let yourAge = Number(prompt("Lütfen yaşınızı giriniz:"));

if (yourAge > myAge) {
  console.log(
    "Benim yaşım " +
      myAge +
      ". Siz benden " +
      (yourAge - myAge) +
      " yaş büyüksünüz."
  );
} else {
  console.log(
    "Benim yaşım " +
      myAge +
      ". Ben sizden " +
      (myAge - yourAge) +
      " yaş büyüğüm."
  );
}

//3

let a = 4;
let b = 3;

// if else kullanarak
if (a > b) {
  console.log(a + ", " + b + " 'den büyük");
} else {
  console.log(a + ", " + b + " 'den küçük");
}

// üçlü operatör kullanarak
console.log(
  a > b ? a + ", " + b + " 'den büyük" : a + ", " + b + " 'den küçük"
);

//4

let sayi = Number(prompt("Bir sayı giriniz:"));
if (sayi % 2 == 0) {
  console.log(sayi + " çift bir sayıdır.");
} else {
  console.log(sayi + " tek bir sayıdır.");
}