// let num1 = 5,
//   num2 = 10,
//   operation = "mult";
// const myFunctions = {
//   sum: (a, b) => a + b,
//   sub: (a, b) => a - b,
//   mult: (a, b) => a * b,
//   div: (a, b) => a / b,
// };
// console.log(myFunctions[operation](num1, num2));

// let dizi = [];
// let sayımız;

// do {
//   sayımız = +prompt("Toplamak istediğiniz sayıları sırayla giriniz : ");
//   dizi.push(sayımız);
// } while (sayımız != 0);

// console.log(
//   (function sumAll(arguments) {
//     let sum = 0;
//     for (let index = 0; index < arguments.length; index++) {
//       sum += arguments[index];
//     }
//     return sum / (arguments.length - 1);
//   })(dizi)
// );

// let dizi = [];

// while (true) {
//   let diziStr = prompt(
//     "Toplamak istediğiniz sayıları virgülle ayırarak giriniz : "
//   ).split(",");
//   let hataliGiris = false;

//   for (let i = 0; i < diziStr.length; i++) {
//     let num = Number(diziStr[i]);
//     if (isNaN(num)) {
//       alert(
//         "Yanlış giriş yaptınız. Lütfen sadece sayıları virgülle ayırarak giriniz."
//       );
//       hataliGiris = true;
//       break;
//     }
//     dizi.push(num);
//   }

//   if (!hataliGiris) {
//     break;
//   }
// }

// console.log(
//   (function sum() {
//     let sum = 0;
//     for (let index = 0; index < arguments[0].length; index++) {
//       sum += arguments[0][index];
//     }
//     return sum / arguments[0].length;
//   })(dizi)
// );

// let soz = "Oku da adam ol!";

// console.log(soz.slice(7, 11));
// console.log(
//   soz.slice(soz.indexOf("adam"), soz.indexOf("adam") + "adam".length)
// );

// let ozlusoz = "Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir.";

// console.log(ozlusoz.substring(8, 13));
// console.log(ozlusoz.substr(ozlusoz.indexOf("hayat"), "hayat".length));

// // console.log("kullanıcı adı".replaceAll("ı", "i").replace(" ", "_"));

// console.log(
//   "kullanıcı adı"
//     .replace("ı", "buraya istediğnizi yazabilirsiniz")
//     .replace("ı", "i")
//     .replace("buraya istediğnizi yazabilirsiniz", "ı")
// );
