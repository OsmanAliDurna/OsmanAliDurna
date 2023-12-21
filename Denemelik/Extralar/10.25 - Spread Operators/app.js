// Frekansı bul sorusu :

const arr1 = [3, 'a', 'a', 'a', 2, 3, 3, 'a', 3, 'a', 2, 4, 9, 3];

let result = {};

arr1.forEach((eleman) => {
    Object.keys(result).includes(eleman.toString()) == false ? result[eleman.toString()] = 1 : result[eleman] += 1
});

let maxTimes = Math.max(...Object.values(result));

console.log(`the most frequent item in an array is ${Object.keys(result).filter((eleman) => result[eleman] == maxTimes)}, and its frequent is ${maxTimes}`)






// const rectangle = {
//     width: 20,
//     height: 10,
//     age: undefined
// }

// const {
//     width: w,
//     height: h,
//     age = 32
// } = rectangle

// console.log(w, h, age)

// //Another Example
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Redux',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
// }
// // Let us create a function which give information about the person object without destructuring

// const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')

//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

//     return personInfo
// }

// console.log(getPersonInfo(person))