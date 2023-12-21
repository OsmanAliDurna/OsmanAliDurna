console.log("** NEW OPERATORS **")

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

// const insan = {
//   kimlikNo: "1234567890",
//   adi: "Ahmet",
//   soyadi: "Can",
//   meslek: "Mimar", // Mühendis
//   maas: 30000,
// }

// console.log(insan.maas) //? . notasyonun
// console.log(insan["meslek"]) //? square bracket

// const mimarAdi = insan.adi
// console.log(mimarAdi)

// // ?Destructure
// let {
//   adi,  // let adi = insan.adi
//   soyadi, // let soyadi = insan.soyadi
//   kimlikNo, 
//   maas
// } = insan

// console.log(adi)
// console.log(kimlikNo)

// kimlikNo = "ABACD"
// console.log(kimlikNo, maas, adi, soyadi)

// insan.meslek = "Muhendis"
// console.log(insan)

// //? NESTED

// const insanlar = {
//   kisi1: {
//     kimlikNo: "1234567890",
//     adi: "Ahmet",
//     soyadi: "Can",
//     meslek: "Mimar",
//     maas: 30000,
//   },
//   kisi2: {
//     kimlikNo: "44234567890",
//     adi: "Canan",
//     soyadi: "Can",
//     meslek: "Sosyal Gelişim Uzmanı",
//     maas: 25000,
//   },
// }

// let kisi1inMaası = insanlar.kisi1.maas;
// console.log("Maaş : " + kisi1inMaası)

//? Destr.
//? 1. yontem

// const {
//   kisi1,
//   kisi2
// } = insanlar

// console.log("Maaş : " + kisi1.maas)

// const {
//   kimlikNo, // let kimlikNo = insanlar.kisi1.kimlikNo
//   adi,
//   soyadi
// } = kisi1

// console.log(adi)

// const {
//   kimlikNo: kimlikNo2, // let kimlikNo = insanlar.kisi1.kimlikNo
//   adi: adi2,
//   soyadi: soyadi2
// } = kisi2

// console.log(adi)

// const {
//   kisi1: {
//     meslek,
//     maas
//   },
//   kisi2: {
//     boyu,
//     soyadi,
//     meslek: m2,
//     maas: ma2
//   }
// } = insanlar

// console.log(meslek)

// //* Example

// const team = [{
//     name: "Josh",
//     surname: "Barry",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "tester",
//     age: 45,
//   },
//   {
//     name: "Hazel",
//     surname: "Nut",
//     job: "team lead",
//     age: 40,
//   },
// ]
// console.log("************")

// //? Klasik yontem ile

// team.forEach((p) => {
//   console.log("NAME:", p.name)
//   console.log("SURNAME:", p.surname)
//   console.log("JOB:", p["job"])
//   console.log("AGE:", p["age"])
// })
// console.log("**** DEST ****")

// //? Destr

// team.forEach((p) => {
//   const {
//     name,
//     surname,
//     age,
//     job
//   } = p
//   console.log("NAME:", name)
//   console.log("SURNAME:", surname)
//   console.log("JOB:", job)
//   console.log("AGE:", age)
// })

// const data = {
//   id: "1",
//   brand: "Apple",
//   product: "Iphone15",
//   stock: 100
// }

// // Klasik yöntem:

// const productPrint = (data) => {
//   console.log(`${data.brand} - ${data.product}: ${data.stock}`)
// }

// productPrint(data);

// // Destructing yöntem:

// const productPrintDestr = (data) => {
//   const {
//     brand,
//     product,
//     stock
//   } = data
//   console.log(`${brand} - ${product}: ${stock}`)
// }

// productPrintDestr(data);

// // Destructing yöntem:

// const productPrintDestrV2 = ({
//   brand,
//   product,
//   stock
// }) => {
//   console.log(`${brand} - ${product}: ${stock}`)
// }

// productPrintDestrV2(data);

// //* =============================================
// //*  DESTRUCTURING (ARRAY)
// //* =============================================

// const people = ["Ali", "Veli", "Can", "Canan"];

// console.log(people[1]);

// // const [,,, p4] = people;
// // const [p1, p2, , p4] = people;
// const [p1, p2, p3, p4] = people;

// console.log(p4)

// //* ==============================================
// //*  REST (...)
// //* =============================================

// const araclar = ["ATV", "Kamyonet", "TIR", "Kamyon", "Araba"];

// const [...gerikalanlar] = araclar.slice(1, -1);

// console.log(gerikalanlar);

// //? Object

// const veri = {
//   id: "1",
//   brand: "Apple",
//   product: "Iphone15",
//   stock: 100
// }

// const {
//   id,
//   brand,
//   ...productStock
// } = veri;

// console.log(productStock);

// const sum = (a, b) => a + b;

// const sumAll = (a,b,...numbers) => {
//   return numbers.reduce((acc, val) => acc + val, 0);
// }

// console.log("SUM :", sum(2, 5, 6, 7, 8))
// console.log("SUM-ALL :", sumAll(2, 5, 6, 7, 8))

// //* ==============================================
// //*  SPREAD (...)
// //* =============================================
// //? Spread operatoru ise iterables olan bir elemani bireysel
// //? degerler haline getirir.

const ucanAraclar = ["helicopter", 6, "ucak", "fuze"]
const karaAracları = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar, karaAracları] //!nested array
console.log(tasitlar)
console.log(tasitlar[1][2])

const tasitlarFlat = [...karaAracları, "hoverCraft", "gemi", ...ucanAraclar]
console.log(tasitlarFlat)

//?Ornek:
const slogan = "Reinvent Your self";
const sloganArray = [...slogan]
console.log(sloganArray)

//?Ornek:
//? Spread ile bir iterable(array), non-iterable'a cevirlebilir.
const sayilar = [2, 4, 5, 13, 56, 23]
console.log(Math.max(...sayilar))

// Extra :

const ciftler = [2, 4, 6];
const tekler = [1, 3, 5];

const yeniSayılar = [...ciftler, ...tekler].sort((a, b) => b - a)

console.log(yeniSayılar);