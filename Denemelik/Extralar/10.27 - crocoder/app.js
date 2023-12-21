//*Square the value of every element in the array. Presume that you will only get numbers in the input array.
const input1 = [1, 2, 3, 4, 5];
//result [1, 4, 9, 16, 25];

//!If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input2 = [1, -4, 12, 0, -3, 29, -150];
//result 42;

const result = input2.reduce((sum, int) => int > 0 ? sum + int : sum + 0, 0);
console.log(result)

//?Calculate the mean and median values of the number elements from the input array.
const input3 = [12, 46, 32, 64];
//output { mean: 38.5, median: 39 }

// const mean = input3.sort((a, b) => a - b).reduce((sum, number) => sum + number, 0) / input3.length;
// console.log(mean)

// const median = input3.sort((a, b) => a - b).filter((number, index) => index == Math.floor(input3.length / 2) || index == Math.floor(input3.length / 2) - 1).reduce((sum, number) => sum + number, 0) / 2
// console.log(median)

console.log({
    mean: input3.sort((a, b) => a - b).reduce((sum, number) => sum + number, 0) / input3.length,
    median: ((input3.length) % 2 == 1) ? (input3.sort((a, b) => a - b).filter((number, index) => index == Math.floor(input3.length / 2) || index == Math.floor(input3.length / 2) - 1).reduce((sum, number) => sum + number, 0) / 2) : input3[Math.floor(input3.length / 2) - 1]
})

//*The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
const input4 = "George Raymond Richard Martin";
//result "GRRM"


//!Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
const input = [{
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jennifer",
        age: 65,
    },
];

//result [13, 67, 54];

//! Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const input6 = "Every developer likes to mix kubernetes and javascript";
//result "E3y d7r l3s to mix k8s and j8t";

//todo: If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

const input7 = 6;
//result 720;


//!Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
const input8 = [
    ["a", 4, "c"],
    ["c", "4", 2],
    ["d", "f", "g"],
];

// const result3 = {}

// input8.flat().map((eleman) => result3[eleman.toString()] ? result3[eleman.toString()]++ : result3[eleman.toString()] = 1);
// console.log(result3)

console.log(input8.flat().reduce((acc, harf) => {
    acc[harf] ? acc[harf]++ : acc[harf] = 1;
    return acc
}, {}))

//result   {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 2,
//     f: 2,
//     g: 1,
//   }

//*You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.

// const students = [{
//         name: "Alice",
//         scores: [90, 85, 92]
//     },
//     {
//         name: "Bob",
//         scores: [75, 80, 85]
//     },
//     {
//         name: "Charlie",
//         scores: [90, 95, 85]
//     },
//     {
//         name: "David",
//         scores: [100, 100, 100]
//     },
// ]
//result [ 
//   { name: 'Jack', average: 100 }
// ]

///Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'],
        [98, 85, 90, 95]
    ],
    ['John', ['HTM', 'CSS', 'JS', 'React'],
        [85, 80, 85, 80]
    ]
]

const convertArrayToObject = (array) => {

    return array.map(([
        namemiz,
        skillsimiz,
        scoresumuz
    ]) => {
        return {
            name: namemiz,
            skills: skillsimiz,
            scores: scoresumuz,
        }
    })
}

console.log(convertArrayToObject(students));