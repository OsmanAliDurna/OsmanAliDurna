"use strict";
const input = document.getElementById('number');
const button = document.getElementById('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    const tc = input.value;
    console.log(tc.length == 11 && tc[0] != "0" && tc.slice(0, 9).split("").reduce((sum, i, index) => sum + (index % 2 == 0 ? (Number(i) * 7) : (Number(i) * -1)), 0) % 10 == Number(tc[9]) && tc.slice(0, 10).split("").reduce((sum, i) => sum + Number(i), 0) % 10 == Number(tc[10]) ? true : false);
});
