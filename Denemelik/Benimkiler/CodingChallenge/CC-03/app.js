// const link = document.querySelector("a");

// link.addEventListener("click", () => {
//     window.open('https:/\/www.calculatorsoup.com/calculators/conversions/roman-numeral-converter.php?do=pop', 'Roman Numeral Converter', 'width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
//     return false;
// });

let numbers = [8, 148, 457];
let expectedOutput = ["VIII", "CXLVIII", "CDLVII"];

let obj = [
    ["I", "V", "X"],
    ["X", "L", "C"],
    ["C", "D", "M"]
];

const roman = (number, basamak) => {

    let result = "";

    switch (number % 10) {
        case 0:
            result;
            break;
        case 1:
            result += obj[basamak][0];
            break;
        case 2:
            result += obj[basamak][0] + obj[basamak][0];
            break;
        case 3:
            result += obj[basamak][0] + obj[basamak][0] + obj[basamak][0];
            break;
        case 4:
            result += obj[basamak][0] + obj[basamak][1];
            break;
        case 5:
            result += obj[basamak][1];
            break;
        case 6:
            result += obj[basamak][1] + obj[basamak][0];
            break;
        case 7:
            result += obj[basamak][1] + obj[basamak][0] + obj[basamak][0];
            break;
        case 8:
            result += obj[basamak][1] + obj[basamak][0] + obj[basamak][0] + obj[basamak][0];
            break;
        case 9:
            result += obj[basamak][0] + obj[basamak][2];
            break;
        default:
            result = null;
            break;
    }

    return result;
}

let basamaklar = (number) => {
    let result = [];

    for (let index = number.toString().length; index > 0; index--) {
        result.push([Math.floor(number / (10 ** (index - 1)) % 10), index - 1]);
    }
    return result;
}

console.log(numbers.map((eleman) => basamaklar(eleman).map((eleman) => roman(...eleman)).join("")));

console.log(expectedOutput);