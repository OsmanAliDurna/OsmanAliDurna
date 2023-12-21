import {
    createEleman
} from "./createElement.js";
import {
    fetching
} from "./fetching.js";


const header = createEleman(document.body, "header", false, "");
const p = createEleman(header, "p", true, "Merhaba");

const table = createEleman(document.body, "table", false, "");

for (let i = 0; i < 5; i++) {
    const row = createEleman(table, "tr", false, "");
    for (let j = 0; j < 3; j++) {
        const data = createEleman(row, "td", true, `Satır${i+1}, Sütun${j+1}`);
    }
}

table.style.borderCollapse = "collapse";

const gelenler = fetching("www.google.com");