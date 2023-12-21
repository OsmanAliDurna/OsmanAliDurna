import {
    fetchingAll
} from './fetchingAll.js';

import {
    fetchingFiltered
} from './fetchingFiltered.js';

export const categorySelection = (btn) => {
    btn.addEventListener("click", (e) => {
        const categorySpan = document.getElementById("category");
        const text = e.target.textContent;

        categorySpan.textContent = text;

        while (products.firstChild) {
            products.removeChild(products.firstChild);
        }

        if (text == "ALL") {
            fetchingAll();
        } else {
            fetchingFiltered(categorySpan.textContent.toLowerCase());
        }

    });

}