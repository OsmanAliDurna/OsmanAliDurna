//*Write a JavaScript function that generates all combinations of a string.
//*Example string : 'dog'
//*Expected Output : d,do,dog,o,og,g

let text = "eşek";

// Mustafa hocanın çözümü :

function combination(word) {
    let emptyArray = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
            emptyArray.push(word.slice(i, j))
        }
    }
    return emptyArray;
}
console.log(combination(text));

// Nilüfer hocanın çözümü :

function combs(text) {
    let l = text.length;
    let result = [];
    for (let i = 0; i < l; i++) {
        for (let j = 1; j <= l; j++) {
            if (j > i) result.push(text.substring(i, j));
        }
    }
    return result;
}
console.log(combs(text));

// Nilüfer hocanın if ten kurtulduk :

function combs(text) {
    let l = text.length;
    let result = [];
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j <= l; j++) {
            result.push(text.substring(i, j));
        }
    }
    return result;
}
console.log(combs(text));

// Zorlama çözüm :

let fullDizi = [];

for (let index = 0; index < text.length; index++) {
    let sliced = text.slice(index);
    sliced.split("").reduce((acc, harf) => {
        acc += harf
        fullDizi.push(acc);
        return acc;
    }, "")
}

console.log(fullDizi)

// Daha da zorlarsak :

let word = "";
let splited = text.split("");

console.log(splited.map((harf, index, array) => array.slice(index)).flat().map((harf, index) => {
    if (index > 0 && word.length % (splited.length) == 0) {
        splited.pop();
        word = ""
    }
    word += harf
    return word;
}));