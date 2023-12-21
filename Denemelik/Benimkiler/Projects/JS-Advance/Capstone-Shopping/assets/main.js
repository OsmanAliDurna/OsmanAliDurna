// Kategori butonlarına basınca Aşağıdaki span in güncellenmesi. Default ALL
// Seçilen Kategori bilgisine göre istenen verilerin ekrana basılması

import {
    categorySelection
} from "./categorySelection.js";

const allButtons = document.querySelectorAll("#btns .btn");
const products = document.getElementById("products");
allButtons.forEach((btn) => categorySelection(btn));


// --------------------------------------------------------------------------

// Sayfa her yenilendiğinde otomatik gelen verilerin ayarı

import {
    fetchingAll
} from "./fetchingAll.js";

const cards = document.querySelector(".offcanvas-body");

window.addEventListener("load", () => {

    while (products.firstChild) {
        products.removeChild(products.firstChild);
    }

    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }

    fetchingAll();

});

// --------------------------------------------------------------------------