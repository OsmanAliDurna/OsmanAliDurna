// const rectangle = {
//     length: 20,
//     width: 20
// }
// console.log(rectangle) // {length: 20, width: 20}

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     isMarried: true
// }
// console.log(person)

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
}

// accessing values using .
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location) // undefined

// // value can be accessed using square bracket and key name
// console.log(person['firstName'])
// console.log(person['lastName'])
// console.log(person['age'])
// console.log(person['age'])
// console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
// console.log(person['phone number'])

// const copyPerson1 = person;
// console.log(copyPerson1.age);

// const copyPerson2 = Object.assign({}, person)
// console.log(copyPerson2.age)

// person.age = 33;

// console.log(person.age)
// console.log(copyPerson1.age);
// console.log(copyPerson2.age);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// for (let [key, val] of Object.entries(person)) {
//     console.log(`Key - ${key}, Value - ${val}`);
// }

// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('firstName'))


// Burada hiç bir müdehale edilemiyor.

// Object.freeze(person);
// person.age = 33;
// console.log(person.age)


// Burada ise içerik güncellenebiliyor, ancak bir şey silme ekleme yapılamıyor.

// Object.seal(person);

// person.age = 33;
// console.log(person.age)

// person.name = "Ali";
// console.log(person.name)

// let x = [5];
// console.log(x); // x = [5]

// let y = x;
// console.log(x); // x = [5]
// console.log(y); // y = [5]

// y[0] = 6;
// console.log(x); // x = [6]
// console.log(y); // y = [6]

// x[0] = 10;
// console.log(x); // x = [10]
// console.log(y); // y = [10]

// x.push(123);
// console.log(x); // x = [10]
// console.log(y); // y = [10]

// x.reverse();
// console.log(x); // x = [10]
// console.log(y); // y = [10]

// y.sort((a, b) => a - b);
// console.log(x); // x = [10]
// console.log(y); // y = [10]

// const arr = [5];
// console.log(arr)

// const shallowCopy = [...arr];
// console.log(arr)
// console.log(shallowCopy)

// shallowCopy[0] = 6;
// console.log(arr);
// console.log(shallowCopy);

// arr[0] = 10;
// console.log(arr);
// console.log(shallowCopy);

// arr.push(123);
// console.log(arr);
// console.log(shallowCopy);

// arr.reverse();
// console.log(arr);
// console.log(shallowCopy);

// shallowCopy.sort((a, b) => a - b);
// console.log(arr);
// console.log(shallowCopy);

// let dizimiz = [1, 2, 3];
// let sliced = dizimiz.slice();

// for (let i = 0; i < sliced.length; i++) {
//     if (dizimiz[i] % 2 == 1) {
//         dizimiz.splice(i + 1, 0, dizimiz[i]);
//     }
// }

// console.log(dizimiz);