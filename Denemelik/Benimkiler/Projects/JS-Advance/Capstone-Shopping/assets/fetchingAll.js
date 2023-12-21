import {
    newCard
} from "./newCard.js";

// import {
//     searchAll
// } from "./searchAll.js";

export const fetchingAll = () => {
    // const input = document.getElementById("searchInput");

    // fetch("https://anthonyfs.pythonanywhere.com/api/products/").then((res) => res.json()).then((data) => {
    //     data.forEach((item) => products.appendChild(newCard(item)));
    //     if (input.value.length > 0) {
    //         while (products.firstChild) {
    //             products.removeChild(products.firstChild);
    //         }
    //         input.addEventListener("input", () => {
    //             searchAll();
    //         })
    //     }
    // }).catch((error) => console.log(error));

    fetch("https://anthonyfs.pythonanywhere.com/api/products/").then((res) => res.json()).then((data) => {
        data.forEach((item) => products.appendChild(newCard(item)));
    }).catch((error) => console.log(error));
}