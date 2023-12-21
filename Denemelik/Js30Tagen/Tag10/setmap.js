// 1

// const companies = new Set();
// console.log(companies);

// 2

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ]

// const setOfLanguages = new Set(languages)
// console.log(setOfLanguages)

// 3

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ]

// const setOfLanguages = new Set(languages)

// for (const language of setOfLanguages) {
//     console.log(language)
// }

// 4

// const companies = new Set() // creating an empty set
// console.log(companies.size) // 0

// companies.add('Google') // add element to the set
// companies.add('Facebook')
// companies.add('Amazon')
// companies.add('Oracle')
// companies.add('Microsoft')
// console.log(companies.size) // 5 elements in the set
// console.log(companies)

// 5 add

// const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// setOfCompanies = new Set()
// for (const company of companies) {
//     setOfCompanies.add(company)
// }

// console.log(setOfCompanies)

// 6 delete

// console.log(companies.delete('Google'))
// console.log(companies.size) // 4 elements left in the set

// 7 includes ?

// console.log(companies.has('Apple')) // false
// console.log(companies.has('Facebook')) // true

// 8 completly delete

// companies.clear()
// console.log(companies)

// 9 Array to Set , Set to Array

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ]
// const langSet = new Set(languages)
// console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
// console.log(langSet.size) // 4

// const counts = []

// for (const l of langSet) {
//     const filteredLang = languages.filter((lng) => lng === l)
//     console.log(filteredLang) // ["English", "English", "English"]
//     counts.push({
//         lang: l,
//         count: filteredLang.length
//     })
// }
// console.log(counts)

// 10 Union operation

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)

// 11 Intersection operation

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)

// 12 Difference operation => A/B  =>  A fark B

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => !B.has(num))
// let C = new Set(c)

// console.log(C)

/////////////////////////////////////////////////       MAP     ////////////////////////////////////////////

// 1 

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map3 = new Map(countries)
console.log(map3)
console.log(map3.size) // array.length iken map3.size
console.log(map3.get("Finland")) // keys gibi get ile istenenin value suna ulaşılabilir.
console.log(map3.has('Finland')) // hasOwnProperty gibi kontrol ediyor.

// 2 adding an item into map ? not like set nor array

// const countriesMap = new Map()
// console.log(countriesMap.size) // 0
// countriesMap.set('Finland', 'Helsinki')
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap)
// console.log(countriesMap.size)

// extra :

const tayfun = {
    name: "tayfun",
}

const ahmet = {
    name: "ahmet",
}

const map = new Map();

map.set("tayfun", 10).set("ahmet", 10);

console.log(map.keys())
console.log(map.values())
console.log(map.entries())
for (const eleman of map) {
    console.log(eleman)
}

const map2 = new Map(Object.entries(tayfun));
console.log(map2);

const tayfun2 = Object.fromEntries(map2);
console.log(tayfun2)