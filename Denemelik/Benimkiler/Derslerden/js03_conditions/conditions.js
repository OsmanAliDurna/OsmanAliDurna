// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***")

const sayi1 = 0
if (sayi1 < 0) {
  console.log("Sayi negatiftir")
} else if (sayi1 > 0) {
  console.log("Sayi pozitiftir")
} else {
  console.log("Sayi 0 a eşittir")
}

const grade = 20
let sonuc = ""

if (grade < 0 || grade > 100) {
  console.log("Hatali not girisi")
} else if (grade < 40) {
  sonuc = "FF"
} else if (grade < 55) {
  sonuc = "DD"
} else if (grade < 70) {
  sonuc = "CC"
} else if (grade < 85) {
  sonuc = "BB"
} else {
  sonuc = "AA"
}
//! Kısa hali
if (sonuc) {
  console.log("SONUC:", sonuc)
}

//? uzun hali
if (Boolean(sonuc) == true) {
  console.log("SONUC:", sonuc)
}

//? ODEV: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.
