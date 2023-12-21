console.log("***** SELECTORS *****")

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const header = document.getElementById("header");

// header.style.backgroundColor = "green";
// header.style.color = "white";
// header.style.fontSize = "20px";
// header.style.fontFamily = "Tahoma";

header.style = "background-color:green; color:white; font-size:20px; font-family:Tahoma";

const h2 = document.getElementById("add-new-item");

h2.textContent = "ADD";
h2.innerText = "ADD ITEM";
h2.innerHTML = "ADD NEW ITEM";
// h2.innerHTML = "<p style='color:red'>Deneme</p>";    Tavsiye edilmiyor. Güvenlik açığından dolayı.

document.getElementById("btn").value = "Submit";

const input = document.getElementById("input");
input.placeholder = "JavaScript";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const li_s = document.getElementsByTagName("li");

Array.from(li_s).map((eleman) => eleman.style.color = "green")

// for (const eleman of li_s) {
//     eleman.style.color = "red"
// }

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myLists = document.getElementsByClassName("list");

for (let index = 0; index < myLists.length; index++) {
    myLists[index].style.backgroundColor = "wheat";
}

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

const h3 = document.querySelector("h3");

h3.style.fontSize = "5px";

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const itemLists = document.querySelectorAll("section.item-list li");

for (const li of itemLists.keys()) {
    console.log(li)
}