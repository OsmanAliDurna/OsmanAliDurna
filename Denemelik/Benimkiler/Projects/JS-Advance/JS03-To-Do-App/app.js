const header = document.querySelector(".header");
const todoList = document.querySelector(".todoList");

document.body.style.textAlign = "center";

const baslık = document.createElement("h1");
baslık.textContent = "To-Do App";
header.style = "padding-bottom : 1rem; background-color : blueviolet; text-align : center;";
header.appendChild(baslık);

const todo = document.createElement("input");
todo.type = "text";
todo.style.marginRight = "2rem";
todo.style.width = "20rem";
header.appendChild(todo);

const olustur = document.createElement("button");
const artı = document.createTextNode("➕");
olustur.appendChild(artı);
header.appendChild(olustur);

olustur.addEventListener("click", (e) => {
    const text = document.createElement("h3");
    const yazı = document.createTextNode(todo.value);
    const silButonu = document.createElement("button");
    const silYazısı = document.createTextNode("🗑");

    silButonu.appendChild(silYazısı)
    text.appendChild(yazı);
    text.appendChild(silButonu);
    todoList.appendChild(text);

    silButonu.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })

})