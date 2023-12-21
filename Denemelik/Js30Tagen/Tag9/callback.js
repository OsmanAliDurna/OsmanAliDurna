const karesi = number => number ** 2;

const cube = (cb, number) => cb(number) * number;

console.log(cube(karesi, 3));

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3;
        }
        return c;
    }
    return b;
}

console.log(a(5)(10)(20));

const numbers = [1, 3, 5, 7, 9];

let total = 0;

numbers.forEach(number => total += number);
console.log(total)

// Setting Time

function sayHello() {
    console.log("Hello");
}

// setTimeout(sayHello, 5000);
// setInterval(sayHello, 1000);

let interval = setInterval(sayHello, 1000);

setTimeout(() => clearInterval(interval), 5999);

// names.sort() == names.sort((a,b) => a.localCompare(b));