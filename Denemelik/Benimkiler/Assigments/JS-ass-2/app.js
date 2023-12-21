// Kodlar buraya

const main = document.getElementsByClassName("bgDiv")[0];
const color = document.getElementById("colorInput");
const text = document.getElementById("colorText");

const butonClick = document.getElementsByClassName("btn-click")[0];
const butonOver = document.getElementsByClassName("btn-over")[0];

// main.style.backgroundColor = "red"
// butonClick.disabled = "false";

const colorGenerator = () => {
    let colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = "#";

    for (let index = 0; index < 6; index++) {
        color += colorCodes[Math.floor(Math.random() * 16)];
    }
    return color;
}

butonClick.addEventListener("click", () => {
    color.value = colorGenerator();
    main.style.backgroundColor = color.value;
    text.textContent = color.value;
});


butonOver.addEventListener("mouseover", () => {
    color.value = colorGenerator();
    main.style.backgroundColor = color.value;
    text.textContent = color.value;
});

window.addEventListener("load", () => {
    color.value = colorGenerator();
    main.style.backgroundColor = color.value;
    text.textContent = color.value;
});