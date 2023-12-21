//1

const dog = {}

//2

console.log(dog);

//3

dog.name = "Kurt";
dog.legs = 4;
dog.color = "blueviolet";
dog.age = 33;
dog.bark = () => "woof woof";

//4

console.log(dog);
console.log(dog.bark());

//5

dog.breed = "Anlamadım.";
dog.getDogInfo = function () {
    return `Köpeğin adından ziyade cinsi : ${this.name}`
};

console.log(dog.getDogInfo());