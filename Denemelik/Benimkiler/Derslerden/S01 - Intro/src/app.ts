console.log("first");

const add = (a: number, b: number) => a + b;

let arr: number[] = [1, 2, 3]

arr.push(Number("a"))

//Hallo

function greet(): void {
    console.log("Hello world");
}

function error(message: string): never {
    throw new Error(message);
}


let abc: number | string = 0;

function checkNumber(n: string | number): void {

    if (typeof abc == "string") {
        abc.split
    } else {
        console.log(abc.toFixed(2))
    }
}
