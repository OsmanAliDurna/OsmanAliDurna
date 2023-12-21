// Kodlar buraya yazılacak.

//  ********    HEADER  ************

const header = document.getElementsByTagName("header")[0];

header.style.backgroundColor = "orangered";
header.style.color = "white";
header.style.display = "flex";
header.style.flexDirection = "column";
header.style.justifyContent = "center";
header.style.alignItems = "center";

const h1 = document.getElementById("title");
h1.textContent = "Javascript Dom Assigment I"

const navigator = document.getElementsByClassName("nav-item")[0];

navigator.style.display = "flex";
navigator.style.flexDirection = "row";
navigator.style.justifyContent = "center";
navigator.style.alignItems = "center";
navigator.style.listStyle = "none";
navigator.style.margin = "1rem";
navigator.style.gap = "1rem";

// *********  SEARCH BAR ***********

const textBoxes = document.getElementsByTagName("input");

textBoxes[0].placeholder = "Ali";
textBoxes[1].placeholder = "123";
textBoxes[1].type = "text";
Array.from(textBoxes).map((eleman) => eleman.disabled = "false");

const button = document.getElementsByClassName("btn")[0];

button.textContent = "Giriş Yap";
button.style.backgroundColor = "green";
button.style.padding = "0.3rem";
button.style.cursor = "pointer";

//  *******     LISTS   ************

const projects = document.getElementById("projects");

projects.firstChild.nextSibling.textContent = "JS Dom Projects";
projects.firstChild.nextSibling.style.margin = "1rem"

const myProjects = ["Hello World!", "Guess Number", "Checkout Page", "Gelir-Gider Projesi", "Api Projects"];

myProjects.forEach((eleman) => {
    let li = document.createElement("li");
    projects.lastChild.previousSibling.appendChild(li);
    li.textContent = eleman;
})