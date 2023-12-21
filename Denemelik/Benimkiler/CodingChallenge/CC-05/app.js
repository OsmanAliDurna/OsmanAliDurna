const sampleInput = ['C1234 - John Doe, London, Full-Stack',
    'C2345 - Jane Doe, London, Data-Science',
    'C2346 - Mary Ann, Paris, AWS-Devops',
    'C2347 - Adam Smith, Texas, AWS-Devops',
    'C2444 - Michael Great, Arizona, Full-Stack',
    'C2555 - William Cash, Manchester, Data-Science',
    'C2455 - Patrick Jane, Madrid, Full-Stack'
];

const table = document.createElement("table");

const yerlestir = document.querySelector("body")
yerlestir.appendChild(table);

let row = document.createElement("tr");
table.appendChild(row);
let col1 = document.createElement("th");
row.appendChild(col1);
let text = document.createTextNode("Student No");
col1.appendChild(text);

let col2 = document.createElement("th");
row.appendChild(col2);
let text2 = document.createTextNode("First Name");
col2.appendChild(text2);

let col3 = document.createElement("th");
row.appendChild(col3);
let text3 = document.createTextNode("Last Name");
col3.appendChild(text3);

let col4 = document.createElement("th");
row.appendChild(col4);
let text4 = document.createTextNode("Location");
col4.appendChild(text4);

let col5 = document.createElement("th");
row.appendChild(col5);
let text5 = document.createTextNode("Path");
col5.appendChild(text5);

sampleInput.forEach((eleman) => {
    let row = document.createElement("tr");
    table.appendChild(row);
    let col1 = document.createElement("td");
    row.appendChild(col1);
    let text = document.createTextNode(eleman.split(" ")[0]);
    col1.appendChild(text);

    let col2 = document.createElement("td");
    row.appendChild(col2);
    let text2 = document.createTextNode(eleman.split(" ")[2]);
    col2.appendChild(text2);

    let col3 = document.createElement("td");
    row.appendChild(col3);
    let text3 = document.createTextNode(eleman.split(" ")[3].slice(0, -1));
    col3.appendChild(text3);

    let col4 = document.createElement("td");
    row.appendChild(col4);
    let text4 = document.createTextNode(eleman.split(" ")[4].slice(0, -1));
    col4.appendChild(text4);

    let col5 = document.createElement("td");
    row.appendChild(col5);
    let text5 = document.createTextNode(eleman.split(" ")[5]);
    col5.appendChild(text5);
});

[document.querySelector("table"), ...document.querySelectorAll("th"), ...document.querySelectorAll("td"), ...document.querySelectorAll("tr")].map((eleman) => {
    eleman.style.padding = "2px";
    eleman.style.textAlign = "left";
    eleman.style.border = "1px solid black";
    eleman.style.borderCollapse = "collapse";
});