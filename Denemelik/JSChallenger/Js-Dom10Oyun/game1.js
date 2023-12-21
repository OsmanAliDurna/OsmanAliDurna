const div = document.createElement("div");
document.body.appendChild(div);
div.style = "width: 30rem; height: 40rem; position: absolute; left: 30%; top: 20%;"

Array(16).fill(1).forEach((eleman) => {
    const x = document.createElement("button");
    div.appendChild(x);
});

const button = document.getElementsByTagName("button");

Array.from(button).map(
    (eleman) => {
        eleman.textContent = "?";
        eleman.style = "margin : 1rem; height: 5rem; width: 5rem; font-size:2rem; color: blueviolet; font-weight:600";
    }
);

const colorList = ['orangered', 'yellow', 'black', 'blueviolet', 'brown', 'cadetblue', 'chocolate', 'darkgreen', 'orangered', 'yellow', 'black', 'blueviolet', 'brown', 'cadetblue', 'chocolate', 'darkgreen'].sort(() => Math.random() - 0.5);

Array.from(button).map((eleman, index) => {
    eleman.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.textContent = "";
        e.target.classList.add("reset");
        e.target.classList.contains("reset") ? e.target.style.backgroundColor = colorList[index] : e.target.style.backgroundColor = "";
        is2(Array.from(button));
    })
})

const is2 = (dizi) => {
    const filtered = dizi.filter((btn) => btn.classList.contains("reset"));
    if (filtered.length > 1) {
        if (filtered[0].style.backgroundColor == filtered[1].style.backgroundColor) {
            filtered.map((eleman) => {
                setTimeout(() => {}, 500);
                eleman.classList.add("bildin");
                eleman.style.visibility = "hidden";
            })
        } else {
            dizi.map((eleman) => {
                setTimeout(() => {
                    eleman.classList.remove("reset");
                    eleman.style.backgroundColor = "";
                }, 500);
            })
        }
    }
}