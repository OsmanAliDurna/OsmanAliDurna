const button = document.getElementById('submit');
const a = document.getElementById('input1');
const b = document.getElementById('input2');

function add(a, b) {
    return a + b;
}

button.addEventListener('click', () => {
    console.log(add(a.value, b.value));
});

// const button = document.getElementById('submit')!;
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;

// function add(a: number,b: number){
//     return a+b
// }

// button.addEventListener('click',() => {

// console.log(add(+a.value, +b.value));

// })