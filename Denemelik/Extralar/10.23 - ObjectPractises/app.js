// const person = {
//     "first Name": "Osman Ali",
//     lastName: "Durna",
//     age: 33,
// }

// for (let index = 0; index < Object.keys(person).length; index++) {
//     console.log(person);
// }

// for (const iterator of person) {
//     console.log(iterator);
// }

// for (const iterator of  Object.keys(person)) {
//     console.log(iterator);
// }

// for (const key in person) {
//     console.log(key + " : " + person[key]);
// }

// person.forEach(element => {console.log(element)});

function Person(name = 'John') {
    this.name = name,
        this.age = 23,
        this.dt = 1990
}

const ali = new Person("Ali");
const veli = new Person("Veli");
const mehmet = new Person("Mehmet");

console.log(ali)
console.log(veli)
console.log(mehmet)

Person.prototype.ekranaBastır = "Bunu yazdırmada sorun yok.";
Person.prototype.doğum = function () {
    this.dt = "Yeni doğmuş";
    return "Yeni doğanın yaşı olmaz."
};

console.log(ali.ekranaBastır)
console.log(veli.doğum())
console.log(veli)