/* Convert Minutes into Seconds

Write a function that takes an integer minutes and converts it to seconds.

Examples:

convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120

Notes:

Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/

const convert = (minute) => {
    return minute * 60;
}
console.log(convert(5)); // 300
console.log(convert(3)); // 180
console.log(convert(2)); // 120