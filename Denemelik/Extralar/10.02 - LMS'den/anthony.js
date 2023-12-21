/*
Sayı Tahmin Etme Oyunu
Sayı 1-100 arasında olacak ve 1 ile 100 dahil ve bu sayı rastgele üretilecek.
Bu aralık dışında herhangi bir veri girişi yapılırsa kullanıcı uyarılacak.
Kullanıcı tahminini girecek(sayıyı kullanıcıdan alacağız) ve sonucunda bilip bilmediği ve sayı kendisine bildirilecek.
Bir kere veri girişi yapılacak. (Şimdilik döngü kullanmayalım.)
atıştırmalık niyetine çözebilirsiniz arkadaşlar
*/

let number = prompt("Lütfen 1 ile 100 arasında bir sayı giriniz : ");

isNaN(number) || Number(number) <= 0 || Number(number) >= 100
  ? alert(
      "Lütfen 1 ile 100 arasında bir sayı giriniz dedik rasgele bir şey değil 😤"
    )
  : Number(number) ==
    Number(prompt("Lütfen tahmin ettiğiniz sayıyı giriniz : "))
  ? alert(`Doğru cevap, sayı : ${number} idi.`)
  : alert("Yanlış cevap! Sana başka hak yok.");