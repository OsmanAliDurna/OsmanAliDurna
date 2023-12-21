//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")

//? Selector variables
const header = document.querySelector("header")
const addButton = document.getElementById("btn")
const silButton = document.getElementById("sil")
const input = document.querySelector("#input")
const ul = document.querySelector("ul")

//? 3. yontemle event tanimlandi
//* mouse header 'ın üzerine geldiginde ilgili function cagrilir.
header.onmouseover = function () {
    header.style.backgroundColor = "red"
    header.style.color = "white"
}
//* mouse header 'ın üzerinden ayrildiginda ilgili function cagrilir.
header.onmouseout = function () {
    header.style.backgroundColor = "transparent"
    header.style.color = "black"
}

const yazdir = () => {
    document.write("Hello from Turkey")
}

//? onload event'ı html ve css kodlarininin render edilmesinin hemen akabinde calisir.
// window.onload = yazdir()

//? window yüklendiginde input'a focuslan
window.addEventListener("load", () => {
    input.focus()
})

//? 4.Yontem (addeventlistener metodu) ile event tanimlandi
//* add butonuna tiklanildgin event funksiyonu cagrilir
addButton.addEventListener("click", () => {
    const li = document.createElement("li")
    const text = document.createTextNode(input.value)
    li.appendChild(text)
    input.value.trim() && ul.appendChild(li);
    input.value = ""
    input.focus()
});

silButton.addEventListener("click", () => {
    ul.removeChild(ul.lastElementChild);
    input.value = ""
    input.focus()
});

input.addEventListener("keyup", (e) => {

    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    // console.log(e.key)
    // console.log(e.keyCode)
    // console.log(e.code)

    if (e.keyCode === 13) {
        addButton.click();
    }
})