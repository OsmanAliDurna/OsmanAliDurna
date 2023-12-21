const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//1

let findMax = (obj) => {
    let max = 0;
    let tutucu = 0;
    for (let index = 0; index < Object.keys(obj).length; index++) {
        if (max < (Object.values(Object.values(obj)[index])[1].length)) {
            max = (Object.values(Object.values(obj)[index])[1].length);
            tutucu = index;
        }
    }
    return Object.keys(users)[tutucu];
}

console.log(findMax(users));

//2

let countLogged = (obj) => {
    let resultLogged = [];
    let result50 = [];
    for (let index = 0; index < Object.values(obj).length; index++) {
        Object.values(obj)[index].isLoggedIn ? resultLogged.push(Object.keys(obj)[index]) : null;
        Object.values(obj)[index].points >= 50 ? result50.push(Object.keys(obj)[index]) : null;
    }
    return [resultLogged.join(" - "), result50.join(" - ")]
}

console.log(`${countLogged(users)[0]} are looged in. \n${countLogged(users)[1]} have greater than 50 points.`);

//3


let mern = (obj) => {
    let isMern = [];
    for (let index = 0; index < Object.values(obj).length; index++) {
        Object.values(obj)[index].skills.includes("MongoDB") ? isMern.push(Object.keys(obj)[index]) : null;
    }
    return isMern.join(" - ");
}

console.log(`${mern(users)} are MERN stack developer.`);

//4