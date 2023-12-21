let durum = "Kaybettiniz.";

let enKüçükihtimal = 1;
let enBüyükihtimal = 100;

for (let index = 0; index < 7; index++) {

  let guess = Math.floor((enBüyükihtimal + enKüçükihtimal) / 2);
  alert(`Benim ${index + 1}. tahminim ${guess}`);

  let komut = prompt(
    guess + " doğruysa (C)orrect, Arttırmak için (I)ncrease, Azaltmak için (D)ecrease yazınızı:"
  ).toUpperCase();

  if (komut == "C") {
    durum = "Tebrikler. Kazandınız.";
    break;
  } else if (komut == "I") {
    enKüçükihtimal = guess + 1;
  } else if (komut == "D") {
    enBüyükihtimal = guess - 1;
  } else {
    alert("İstenenler dışında bir komut girdiniz !");
    index--;
  }
}

alert(durum);
