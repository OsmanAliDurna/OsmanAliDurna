import {
    newCard
} from "./newCard.js";

export const searchAll = () => {
    const input = document.getElementById("searchInput");
    fetch("https://anthonyfs.pythonanywhere.com/api/products/").then((res) => res.json()).then((data) => {
        const result = data.filter((item) => item.title.includes(input.value));
        console.log(result)
        result.forEach((item) => products.appendChild(newCard(item)));
    }).catch((error) => console.log(error));
}