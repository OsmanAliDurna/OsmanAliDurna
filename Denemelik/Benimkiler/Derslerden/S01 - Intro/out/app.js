function greet() {
    console.log('Hello');
}
let a = greet();
function error(message) {
    throw new Error(message);
}
console.log(error('Hata Oluştu'));
