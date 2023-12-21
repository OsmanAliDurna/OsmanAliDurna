import {
    newCard
} from "./newCard.js";

export const fetchingFiltered = (ctg) => {
    fetch("https://anthonyfs.pythonanywhere.com/api/products/").then((res) => res.json()).then((data) => {
        const result = data.filter((item) => item.category.toLowerCase() == ctg.toLowerCase());
        result.forEach((item) => products.appendChild(newCard(item)));
    }).catch((error) => console.log(error));
}