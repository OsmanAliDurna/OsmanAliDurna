/* 
if first dice is 1 and second dice is 6, output should be 'one - six'

* For example :
* call this function with dices(10) Yo should display all 10 result.
* And display the result in the following format on the console:

* for Example:
* 1st dice: 2 2nd dice: 3 output => 'two' - 'three'
* 1st dice: 6 2nd dice: 4 output => 'four' - 'six' 

Always dsiplay the low dice first.

*/

let diceNumberToString = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
}

let rollTheDices = (number) => {
    let result = [];

    for (let i = 0; i < number; i++) {
        let unsorted = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        let dices = unsorted.slice().sort();
        console.log(`1st dice: ${unsorted[0]} 2nd dice: ${unsorted[1]} output => '${diceNumberToString[dices[0]]}' - '${diceNumberToString[dices[1]]}'`);
    }
}

rollTheDices(10)

// let rollTheDices = (number) => {
//     let result = [];

//     for (let i = 0; i < number; i++) {
//         let dices = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1].sort();
//         result.push([diceNumberToString[dices[0]], diceNumberToString[dices[1]]].join(" - "))
//     }
//     return result;
// }

// console.log(rollTheDices(3))