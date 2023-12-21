const generator = () => {
    let result = [];
    const symbols = "!@#$%^&*()\_+~|}{[]:;?><,./-=";
    const numbers = "0123456789";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const uppers = letters.toUpperCase();

    for (let index = 0; index < 2; index++) {
        result.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    for (let index = 0; index < 3; index++) {
        result.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    const howManyLowerCaseLetters = Math.floor(Math.random() * 4) + 1;
    const remains = 5 - howManyLowerCaseLetters;

    for (let index = 0; index < howManyLowerCaseLetters; index++) {
        result.push(letters[Math.floor(Math.random() * letters.length)]);
    }

    for (let index = 0; index < remains; index++) {
        result.push(uppers[Math.floor(Math.random() * uppers.length)]);
    }

    document.querySelector("span").textContent = result.sort(() => Math.random() - 0.5).join("");
}