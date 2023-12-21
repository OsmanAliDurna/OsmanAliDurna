const ahmet = () => {
    setTimeout(() => {
        console.log("Ahmet geldi");
    }, 3000)
}

async function order() {

    console.log("1. işlem");
    console.log("2. işlem");
    console.log("3. işlem");

    await ahmet();

    setTimeout(() => {
        console.log("4. işlem");
    }, 1000)

    console.log("5. işlem");
}

order();

console.log("6. işlem");

/*

1
2
3
await ahmet****3000
4*******    
5******
6
ahmet ***** 3
4 ***** 1
5
4
ahmet

*/