console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

const html = document.querySelector("ul li:nth-child(1)");

// console.log(html.parentNode.parentNode.parentNode)
// console.log(html.parentElement.parentElement.parentElement)

// // node daha sağlıklı document e ulaşıyor. Element null veriyor.
// console.log(html.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
// console.log(html.parentElement.parentElement.parentElement.parentElement.parentElement)

console.log(html.closest("section").previousElementSibling);

const newLi = document.createElement("h1");
newLi.innerHTML = "Bootstrap";
newLi.style.color = "red";

const ulList = document.querySelector(".ullist");
document.body.appendChild(newLi);

const newdiv = document.createElement("section");
newdiv.id = "newid";

const hOne = document.createElement("h1");
hOne.innerHTML = "ben yeni gelmişim";
hOne.style = "color:blue; font-size:2rem; text-transform: uppercase;";

newdiv.appendChild(hOne);

const header = document.querySelector("header");
document.body.insertBefore(newdiv, header);

const button = document.querySelector("#btn");
button.addEventListener("mouseover", (e) => location.reload());