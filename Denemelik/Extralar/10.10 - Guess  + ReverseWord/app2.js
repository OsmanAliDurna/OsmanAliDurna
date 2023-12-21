// Write a JavaScript function called reverseWordsWithoutArray that takes a sentence as input and returns
// the sentence with its words reversed, without using arrays:

// This JavaScript code challenge involves reversing the words in a given sentence without using arrays. It's a
// practical exercise that combines string manipulation, loops, and functions.

// Expected Outputs :
// For example, if the input is Hello Js World 2023, the function should return "2023 World Js Hello".

/*
let mySentence = "Hello Js World 2023";

mySentence.replace(" ", ",").replace("H", "h").toUpperCase()

function reverseWordsWithoutArray() {

  console.log(mySentence.split(" ").reverse().join(" "));

}
*/

// Mathias Çözüm

/*
let text;
let reverse = " ";

function reverseSentence(word) {

  for (let i = word.split(" ").length - 1; i >= 0; i--) {

    text = word.split(" ")[i];

    reverse += text + " "; 

  }
  return reverse.trim();
}

console.log(reverseSentence("Hello Js World 2023"));
*/

// Muaz 1. çözüm

/*
let sentence = "Hello Js World 2023";
let length = sentence.split(" ").length;
let reversedSentence = "";

for (let i = 0; i < length; length--) {
  reversedSentence += sentence.split(" ")[length - 1] + " ";
}

console.log(reversedSentence);
*/

// Muaz 2. çözüm

/*
let sentence = "Hello Js World 2023";
let length = sentence.split(" ").length;
let reversedSentence = "";

for (let i = 0; i < length; length--) {
  reversedSentence += sentence.split(" ")[length - 1];
}

console.log(reversedSentence.split(/(?=[A-Z])/).join(" "));
*/

// Hilal 1. Çözüm

/*
function tersCevir(cumle) {

  let kelimeBaslangic = 0;

  let tersCumle = "";

  for (let i = 0; i <= cumle.length; i++) {

    if (cumle[i] === " " || cumle[cumle.length] === "\0") {

      let kelimeSonu = i - 1;
      let kelimem = "";

      for (let j = kelimeBaslangic; j <= kelimeSonu; j++) {
        kelimem += cumle[j];
      }

      tersCumle = kelimem + " " + tersCumle;

      kelimeBaslangic = i + 1;
    }
  }
  return tersCumle;
}

let cumle = "Hello Js World 2023";
console.log(tersCevir(cumle));
*/

/*

// Hilal 2. Çözüm

function tersSiraliKelimeNumaralari(cumle) {

    let kelimeSonu = (cumle.length) - 1;

    let kelimeSayac = 1;

    let siralanmisCumle = '';

    for (let i = cumle.length - 1; i >= 0; i--) {
        
        if (cumle[i] === ' ' || i === 0) {

            let baslangic = i + 1;

            if (i === 0) {
                siralanmisCumle += `${cumle.slice(kelimeSonu)} `;
            } else {
                siralanmisCumle += `${cumle.slice(baslangic, kelimeSonu)} `;
            }

            kelimeSonu = i - 1;

            kelimeSayac++;
        }
    }
    return siralanmisCumle.trim();
}
let cumle = "Hello World Js 2023";
let siralanmisCumle = tersSiraliKelimeNumaralari(cumle);
console.log(siralanmisCumle);
*/